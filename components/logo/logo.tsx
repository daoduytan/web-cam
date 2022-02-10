import { useTheme } from '../../context';

function Logo() {
  const { theme } = useTheme();
  return (
    <div>
      <img
        className="inline-block"
        alt="camtran"
        src={`/camtran-logo-${theme === 'dark' ? 'light' : 'dark'}.svg`}
      />
    </div>
  );
}

export { Logo };
