import Link from 'next/link';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import { Button } from './ui/button';
import { InteractiveGridPattern } from './magicui/interactive-grid-pattern';
import { Download, Phone, Sparkle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

const HERO_QUERY = defineQuery(`*[_type == "hero"][0] {
  name,
  role,
  description,
  resume
}`);

export default async function Hero() {
    const { data: hero } = await sanityFetch({ query: HERO_QUERY });

    const isDataAvailable = hero?.name || hero?.role || hero?.description;

    return (
        <section id="hero" className="text-foreground relative overflow-hidden">
            <InteractiveGridPattern
                className={cn(
                    '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
                    'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-60 dark:opacity-20',
                )}
            />
            <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
                {isDataAvailable ? (
                    <>
                        <Badge className="rounded-full px-6 text-base tracking-wide md:text-lg">
                            <Sparkle className="mr-2 h-4 w-4" />
                            {hero?.role}
                        </Badge>
                        <h1 className="mt-0 mb-4 text-[clamp(4rem,6cqw,8rem)] font-semibold">
                            {hero?.name}
                        </h1>
                        <p className="text-muted-foreground text-md mb-8 max-w-2xl leading-relaxed">
                            {hero?.description}
                        </p>
                        <div className="flex justify-center gap-4">
                            {hero?.resume && (
                                <Button asChild variant="outline" size="lg">
                                    <a
                                        href={hero.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download />
                                        Download Resume
                                    </a>
                                </Button>
                            )}
                            <Button asChild variant="default" size="lg">
                                <Link href="/#contact">
                                    <Phone />
                                    Contact Me
                                </Link>
                            </Button>
                        </div>
                    </>
                ) : (
                    <p className="text-muted-foreground text-center">
                        Hero content is currently unavailable. Please check back later.
                    </p>
                )}
            </div>
        </section>
    );
}

