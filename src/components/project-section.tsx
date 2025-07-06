import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import type { Project } from '@/sanity/types';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';
import ProjectCard from './project-card';

const PROJECTS_QUERY = defineQuery(`*[
  _type == "project" && defined(slug.current)
] | order(createdAt desc)[0...12] {
  _id,
  image,
  title,
  description,
  slug,
  techStack,
  link,
  createdAt
}`);

export default async function ProjectSection() {
    const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

    return (
        <section id="projects" className="text-foreground py-16">
            <div className="container mx-auto px-6">
                <h1 className="mb-12 text-center text-[clamp(2.5rem,4vw,4rem)] leading-tight font-semibold">
                    Projects
                </h1>

                {projects?.length > 0 ? (
                    <Carousel
                        className="relative w-full"
                        opts={{ loop: true }}
                        autoplay
                        autoplayInterval={2000}
                    >
                        <CarouselContent>
                            {projects.map((item: Project) => (
                                <CarouselItem
                                    key={item._id}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <ProjectCard data={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute -bottom-18 left-1/2 z-10 flex -translate-x-1/2 gap-4">
                            <CarouselPrevious className="static" />
                            <CarouselNext className="static" />
                        </div>
                    </Carousel>
                ) : <p className="text-muted-foreground text-center">
                    No projects to showcase at the moment. Please check back soon!
                </p>
                }
            </div>
        </section>
    );
}
