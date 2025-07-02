import { type SanityDocument } from 'next-sanity';

export function sortExperiencesByDate(experiences: SanityDocument[]) {
    return experiences.sort((a, b) => {
        const extractEndDate = (dateStr: string) => {
            const parts = dateStr.split('–').map((part) => part.trim());
            const end = parts[1] || parts[0];

            if (/present/i.test(end)) return Infinity;

            const parsed = Date.parse(end);
            return isNaN(parsed) ? -Infinity : parsed;
        };

        return extractEndDate(a.date) - extractEndDate(b.date);
    });
}
