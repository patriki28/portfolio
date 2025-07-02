import { type LucideIcon, icons } from 'lucide-react';

export function getLucideIcon(name: string): LucideIcon | null {
    return (icons as Record<string, LucideIcon>)[name] || null;
}
