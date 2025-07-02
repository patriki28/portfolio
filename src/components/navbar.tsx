'use client';

import Link from 'next/link';
import ModeToggle from './mode-toggle';
import { Separator } from './ui/separator';
import { Dock, DockIcon } from './magicui/dock';
import { Briefcase, Home, Laptop, Phone } from 'lucide-react';

const navItems = [
    { href: '/#hero', icon: Home },
    { href: '/#experience', icon: Briefcase },
    { href: '/#projects', icon: Laptop },
    { href: '/#contact', icon: Phone },
];

export default function Navbar() {
    return (
        <div className="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 gap-4">
            <Dock direction="middle">
                {navItems.map(({ href, icon: Icon }, index) => (
                    <DockIcon key={index}>
                        <Link href={href} className='p-4'>
                            <Icon className="size-6" />
                        </Link>
                    </DockIcon>
                ))}

                <Separator orientation="vertical" className="h-full" />

                <DockIcon>
                    <ModeToggle />
                </DockIcon>
            </Dock>
        </div>
    );
}
