import { useTheme } from '@/context/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

function ThemeController() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center justify-center" onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </div>
  );
}
export { ThemeController };
