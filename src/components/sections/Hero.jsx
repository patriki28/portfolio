import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import Meteors from '../ui/meteors';
import cv from '@/assets/DIESTA_PATRICK_TED_CV.pdf';

export default function Hero() {
  const handleDownload = () => {
    const userConfirmed = window.confirm('Do you want to download this CV?');
    if (userConfirmed) {
      const link = document.createElement('a');
      link.href = cv;
      link.download = 'DIESTA_PATRICK_TED_CV.pdf';
      link.click();
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[40rem] w-full max-w-5xl flex-col items-center justify-center overflow-x-hidden"
    >
      <Meteors number={30} />

      <article className="relative flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-semibold">Web Developer</h1>
        <h1 className="text-8xl font-bold leading-tight">Patrick Diesta</h1>
        <p className="my-6 max-w-xl text-muted-foreground">
          A motivated senior IT student with a passion for software development.
          Skilled in programming, problem-solving, and eager to contribute to
          innovative technology solutions.
        </p>

        <Button
          size="lg"
          variant="outline"
          className="w-full max-w-xs"
          onClick={handleDownload}
        >
          Download CV
          <Download className="ml-3" />
        </Button>
      </article>
    </section>
  );
}
