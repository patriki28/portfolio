'use client';

import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface AnimateSectionProps {
    children: ReactNode;
    threshold?: number;
}

function AnimateSection({ children, threshold = 0.5 }: AnimateSectionProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}

export { AnimateSection };
