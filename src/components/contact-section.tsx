import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import type { Social } from '@/sanity/types';
import { Button } from './ui/button';
import { getLucideIcon } from '@/utils/getLucideIcon';

const SOCIALS_QUERY =
    defineQuery(`*[_type == "social"] | order(_createdAt desc)[0...12] {
  _id,
  icon,
  label,
  link
}`);

export default async function ContactSection() {
    const { data: socials } = await sanityFetch({ query: SOCIALS_QUERY });

    return (
        <section id="contact" className="text-foreground py-16">
            <div className="container mx-auto flex max-w-xl flex-col items-center px-6 text-center">
                <h1 className="mb-2 text-[clamp(2.5rem,4vw,4rem)] font-semibold">
                    Contact Me
                </h1>
                <p className="text-muted-foreground mb-6 text-lg">
                    If you have any questions, please feel free to reach out to
                    me through my socials below.
                </p>
                {socials?.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-4">
                        {socials.map((item: Social) => {
                            const Icon = getLucideIcon(item.icon);
                            return (
                                <a
                                    key={item._id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        {Icon && <Icon className="h-5 w-5" />}
                                    </Button>
                                </a>
                            );
                        })}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
