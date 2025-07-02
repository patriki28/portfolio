export const dynamic = 'force-dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import { urlForImage } from '@/sanity/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimateSection } from '@/components/animate-section';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const PROJECT_QUERY =
    defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  _id,
  image,
  title,
  description,
  techStack,
  link,
  createdAt
}`);

export default async function ViewProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const { data: project } = await sanityFetch({
        query: PROJECT_QUERY,
        params: { slug: slug },
    });

    if (!project) return notFound();

    const imageUrl = project.image?.asset
        ? urlForImage(project.image).url()
        : "/placeholder.webp";

    return (
        <AnimateSection>
            <section className="text-foreground min-h-screen py-16">
                <div className="container mx-auto px-6">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{project.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
                        <Image
                            src={imageUrl}
                            alt={project.title || 'Project image'}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
                        {project.title}
                    </h1>
                    <p className="text-muted-foreground mb-6 text-lg whitespace-pre-line">
                        {project.description}
                    </p>
                    {project?.techStack &&
                        Array.isArray(project.techStack) &&
                        project.techStack.length > 0 && (
                            <div className="mb-6">
                                <h2 className="mb-2 text-lg font-semibold">
                                    Tech Stack
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((item: string, index: number) => (
                                        <Badge key={index}>{item}</Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        {project?.link ? (
                            <Button asChild size="lg" variant="default">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Live Preview
                                </a>
                            </Button>
                        ) : <p className='text-muted-foreground'>Live Preview is coming soon</p>}
                    </div>
                </div>
            </section>
        </AnimateSection>
    );
}
