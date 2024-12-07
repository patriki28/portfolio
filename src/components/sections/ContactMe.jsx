import { socials } from '@/data/socials';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export default function ContactMe() {
  return (
    <section id="contactme" className="text-center">
      <h1 className="text-5xl font-semibold">Contact Me</h1>
      <p className="my-6 text-muted-foreground">
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
