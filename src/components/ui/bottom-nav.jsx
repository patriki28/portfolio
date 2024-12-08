import { nav } from '@/data/nav';
import { Dock, DockIcon } from './dock';
import { Separator } from './separator';
import { ThemeController } from './theme-controller';
import { Link } from 'react-scroll';

export function BottomNav() {
  return (
    <Dock
      direction="middle"
      className="fixed bottom-10 left-1/2 -translate-x-1/2"
    >
      {nav.map((item) => (
        <DockIcon key={item.id}>
          <Link
            to={item.id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="cursor-pointer"
          >
            <item.icon />
          </Link>
        </DockIcon>
      ))}
      <Separator orientation="vertical" />
      <DockIcon>
        <ThemeController />
      </DockIcon>
    </Dock>
  );
}
