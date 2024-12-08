import { useState } from 'react';
import { projects } from '@/data/projects';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import { Badge } from './badge';
import { Card, CardContent } from './card';
import Lightbox from 'yet-another-react-lightbox';

function ProjectCard({ index, project, handleImageClick }) {
  return (
    <Card className="h-full border-none">
      <CardContent className="flex aspect-square flex-col gap-2 p-4">
        <div
          onClick={() => handleImageClick(index)}
          className="relative h-[200px] w-full overflow-hidden rounded-lg"
        >
          <img
            src={project.img}
            alt={project.title}
            className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        <h1 className="text-2xl font-bold">{project.title}</h1>

        <p className="text-sm font-semibold text-muted-foreground">
          {project.description}
        </p>
        <div className="my-2 flex list-none flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <Badge key={idx} className="px-2 py-1 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectList() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = projects.map((project) => ({
    src: project.img,
  }));

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ProjectCard
                index={index}
                project={project}
                handleImageClick={handleImageClick}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      )}
    </>
  );
}

export { ProjectList, ProjectCard };
