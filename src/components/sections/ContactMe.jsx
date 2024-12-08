import { socials } from '@/data/socials';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export default function ContactMe() {
  return (
    <section id="contactme" className="text-center">
      <h1 className="text-[clamp(1rem,8vw,3rem)] font-semibold leading-tight">
        Contact Me
      </h1>
      <p className="my-2 text-muted-foreground sm:my-4">
        If you have any questions, please feel free to reach out to me through
        my socials below.
      </p>
      <div className="flex h-10 flex-wrap items-center justify-center gap-2">
        <Separator orientation="vertical" />

        {socials.map((social, index) => (
          <a key={index} href={social.link}>
            <Button size="icon" variant="outline">
              <social.icon />
            </Button>
          </a>
        ))}
        <Separator orientation="vertical" />
        <p>diestapatrick1@gmail.com</p>
      </div>
    </section>
  );
}
