import { ProjectList } from '../ui/project-list';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-[30rem] flex-col items-center justify-center"
    >
      <h1 className="mb-2 text-[clamp(1rem,8vw,3rem)] font-semibold leading-tight sm:mb-4">
        Featured Projects
      </h1>
      <ProjectList />
    </section>
  );
}
