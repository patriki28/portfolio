import { projects } from '@/data/projects';
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from '../ui/carousel';
import { Badge } from '../ui/badge';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-[30rem] flex-col items-center justify-center"
    >
      <h1 className="mb-4 text-5xl font-semibold">Featured Projects</h1>

      <Carousel
        orientation="vertical"
        className="flex items-center justify-center gap-2"
      >
        <div className="relative basis-3/4">
          <CarouselMainContainer className="h-80">
            {projects.map((project, index) => (
              <SliderMainItem
                key={index}
                className="relative h-52 overflow-hidden rounded-md border border-muted bg-[#191919] p-4"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-10"
                />

                <div className="relative z-10 text-white">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="my-2 flex list-none flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} className="px-2 py-1 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </SliderMainItem>
            ))}
          </CarouselMainContainer>
        </div>
        <CarouselThumbsContainer className="h-80 basis-1/4">
          {projects.map((project, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="rounded-md bg-transparent"
            >
              <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-md border border-muted bg-background p-2 text-center">
                {project.title}
              </span>
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </section>
  );
}
