import { AnimateSection } from '@/components/animate-section';
import ContactSection from '@/components/contact-section';
import ExperienceSection from '@/components/experience-section';
import Hero from '@/components/hero';
import ProjectSection from '@/components/project-section';

export default async function IndexPage() {
    return (
        <>
            <AnimateSection>
                <Hero />
            </AnimateSection>
            <AnimateSection>
                <ExperienceSection />
            </AnimateSection>
            <AnimateSection>
                <ProjectSection />
            </AnimateSection>
            <AnimateSection>
                <ContactSection />
            </AnimateSection>
        </>
    );
}
