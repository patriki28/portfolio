import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { urlForImage } from '@/sanity/image';
import { Project } from '@/sanity/types';

interface ProjectCardProps {
    data: Project;
}

export default function ProjectCard({ data }: ProjectCardProps) {
    const { image, title, description, slug } = data;

    const imageUrl = image?.asset
        ? urlForImage(image).url()
        : '/placeholder.webp';

    return (
        <Card className="h-full">
            <CardContent>
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                        src={imageUrl}
                        alt={title || 'Project image'}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-2">
                    <h2 className="truncate text-xl font-semibold">{title}</h2>
                    <p className="text-muted-foreground line-clamp-3">
                        {description}
                    </p>
                    {slug && (
                        <Button asChild size="lg" className="mt-4 w-full">
                            <Link href={`/projects/${slug.current}`}>
                                View More
                            </Link>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
