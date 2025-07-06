import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from './ui/timeline';
import { sortExperiencesByDate } from '@/utils/sortExperiencesByDate';

const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience"] {
  _id,
  date,
  title,
  description
}`);


export default async function ExperienceSection() {
    const { data } = await sanityFetch({ query: EXPERIENCE_QUERY });
    const experiences = sortExperiencesByDate(data);

    return (
        <section id="experience" className="bg-primary/3 text-foreground py-16">
            <div className="container mx-auto px-6">
                <h1 className="mb-12 text-center text-[clamp(2.5rem,4vw,4rem)] leading-tight font-semibold">
                    Experience
                </h1>

                {experiences?.length > 0 ? (
                    <div className="overflow-x-auto">
                        <Timeline
                            defaultValue={experiences.length - 1 || 1}
                            className="min-w-[640px] sm:min-w-full"
                            orientation="horizontal"
                        >
                            {experiences.map((exp, index) => (
                                <TimelineItem key={exp._id} step={index + 1}>
                                    <TimelineHeader>
                                        <TimelineSeparator />
                                        <TimelineDate>{exp.date}</TimelineDate>
                                        <TimelineTitle>
                                            {exp.title}
                                        </TimelineTitle>
                                        <TimelineIndicator />
                                    </TimelineHeader>
                                    <TimelineContent>
                                        {exp.description}
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                ) : <p className="text-muted-foreground text-center">
                    No experiences to display at the moment. Please check back later!
                </p>
                }
            </div>
        </section>
    );
}
