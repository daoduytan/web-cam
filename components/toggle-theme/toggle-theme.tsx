import { cloneElement } from 'react';
import { useTheme } from '../../context';

interface Props {
  children: JSX.Element;
}

function ToggleTheme({ children }: Props) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const value = theme === 'dark' ? 'light' : 'dark';

    setTheme(value);
  };
  return cloneElement(children, {
    onClick: toggleTheme,
    className: 'cursor-pointer',
  });
}

export { ToggleTheme };
