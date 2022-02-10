import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type TypeTheme = 'dark' | 'light';

interface IThemeContext {
  theme: TypeTheme;
  setTheme: React.Dispatch<any>;
}

const initialThemeContext: IThemeContext = {
  theme: 'dark',
  setTheme: () => {},
};

const ThemeContext = createContext<IThemeContext>(initialThemeContext);

interface Props {
  children: ReactNode;
}

function getInitialTheme(): TypeTheme {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs as TypeTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
}

export function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<TypeTheme>(getInitialTheme());

  useEffect(() => {
    function checkTheme(value: TypeTheme) {
      const root = window.document.documentElement;
      const isDark = value === 'dark';
      root.classList.remove(isDark ? 'light' : 'dark');
      root.classList.add(value);
    }

    checkTheme(theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return {
    theme,
    setTheme,
  };
}
