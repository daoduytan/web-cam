import { ImageCus } from '..';
import { useTheme } from '../../context';

function Logo() {
  const { theme } = useTheme();
  const src = `/camtran-logo-${theme === 'dark' ? 'light' : 'dark'}.svg`

  return (
    <ImageCus src={src} className="w-full" />
  );
}

export { Logo };
