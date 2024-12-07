'use client';

import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
  createContext,
} from 'react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const CarouselContext = createContext(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};

const Carousel = forwardRef(
  (
    {
      carouselOptions,
      orientation = 'horizontal',
      dir,
      plugins,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
      {
        ...carouselOptions,
        axis: orientation === 'vertical' ? 'y' : 'x',
        direction: carouselOptions?.direction ?? dir,
      },
      plugins,
    );
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
      {
        ...carouselOptions,
        axis: orientation === 'vertical' ? 'y' : 'x',
        direction: carouselOptions?.direction ?? dir,
        containScroll: 'keepSnaps',
        dragFree: true,
      },
      plugins,
    );

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const ScrollNext = useCallback(
      () => emblaMainApi?.scrollNext(),
      [emblaMainApi],
    );
    const ScrollPrev = useCallback(
      () => emblaMainApi?.scrollPrev(),
      [emblaMainApi],
    );
    const direction = carouselOptions?.direction ?? dir;

    const handleKeyDown = useCallback(
      (event) => {
        if (!emblaMainApi) return;
        if (orientation === 'horizontal') {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            direction === 'rtl' ? ScrollNext() : ScrollPrev();
          }
        } else if (orientation === 'vertical') {
          if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            event.key === 'ArrowUp' ? ScrollPrev() : ScrollNext();
          }
        }
      },
      [emblaMainApi, orientation, direction, ScrollNext, ScrollPrev],
    );

    const onThumbClick = useCallback(
      (index) => emblaMainApi?.scrollTo(index),
      [emblaMainApi],
    );
    const onSelect = useCallback(() => {
      const selected = emblaMainApi?.selectedScrollSnap();
      setActiveIndex(selected);
      emblaThumbsApi?.scrollTo(selected);
      setCanScrollPrev(emblaMainApi?.canScrollPrev());
      setCanScrollNext(emblaMainApi?.canScrollNext());
    }, [emblaMainApi, emblaThumbsApi]);

    useEffect(() => {
      if (!emblaMainApi) return;
      emblaMainApi.on('select', onSelect);
      emblaMainApi.on('reInit', onSelect);
      return () => emblaMainApi.off('select', onSelect);
    }, [emblaMainApi, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          emblaMainApi,
          mainRef: emblaMainRef,
          thumbsRef: emblaThumbsRef,
          scrollNext: ScrollNext,
          scrollPrev: ScrollPrev,
          canScrollNext,
          canScrollPrev,
          activeIndex,
          onThumbClick,
          handleKeyDown,
          carouselOptions,
          direction,
          orientation,
        }}
      >
        <div
          {...props}
          ref={ref}
          tabIndex={0}
          className={cn(
            'relative grid w-full gap-2 focus:outline-none',
            className,
          )}
          dir={direction}
          onKeyDownCapture={handleKeyDown}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);

Carousel.displayName = 'Carousel';

const CarouselMainContainer = forwardRef(
  ({ className, children, ...props }, ref) => {
    const { mainRef, orientation, direction } = useCarousel();

    return (
      <div {...props} ref={mainRef} className="overflow-hidden" dir={direction}>
        <div
          ref={ref}
          className={cn(
            'flex',
            orientation === 'vertical' && 'flex-col',
            className,
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);

CarouselMainContainer.displayName = 'CarouselMainContainer';

const CarouselThumbsContainer = forwardRef(
  ({ className, children, ...props }, ref) => {
    const { thumbsRef, orientation, direction } = useCarousel();

    return (
      <div
        {...props}
        ref={thumbsRef}
        className="overflow-hidden"
        dir={direction}
      >
        <div
          ref={ref}
          className={cn(
            'flex',
            orientation === 'vertical' && 'flex-col',
            className,
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);

CarouselThumbsContainer.displayName = 'CarouselThumbsContainer';

const SliderMainItem = forwardRef(({ className, children, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        `min-w-0 shrink-0 grow-0 basis-full p-1 ${
          orientation === 'vertical' ? 'pb-1' : 'pr-1'
        }`,
        className,
      )}
    >
      {children}
    </div>
  );
});

SliderMainItem.displayName = 'SliderMainItem';

const SliderThumbItem = forwardRef(
  ({ className, index, children, ...props }, ref) => {
    const { activeIndex, onThumbClick, orientation } = useCarousel();
    const isSlideActive = activeIndex === index;

    return (
      <div
        {...props}
        ref={ref}
        onClick={() => onThumbClick(index)}
        className={cn(
          'flex min-w-0 shrink-0 grow-0 basis-1/3 p-1',
          orientation === 'vertical' ? 'pb-1' : 'pr-1',
          className,
        )}
      >
        <div
          className={cn(
            'relative aspect-square h-20 w-full rounded-md opacity-50 transition-opacity',
            isSlideActive && '!opacity-100',
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);

SliderThumbItem.displayName = 'SliderThumbItem';

const CarouselPrevious = forwardRef(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { scrollPrev, canScrollPrev, orientation } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute z-10',
          orientation === 'vertical'
            ? '-top-2 left-1/2 -translate-x-1/2 rotate-90'
            : '-left-2 top-1/2 -translate-y-1/2',
          className,
        )}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        {...props}
      >
        <ChevronLeftIcon className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);

CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = forwardRef(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { scrollNext, canScrollNext, orientation } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute z-10',
          orientation === 'vertical'
            ? '-bottom-2 left-1/2 -translate-x-1/2 rotate-90'
            : '-right-2 top-1/2 -translate-y-1/2',
          className,
        )}
        onClick={scrollNext}
        disabled={!canScrollNext}
        {...props}
      >
        <ChevronRightIcon className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);

CarouselNext.displayName = 'CarouselNext';

export {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
  CarouselPrevious,
  CarouselNext,
};
