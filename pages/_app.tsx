import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../context';
import { ProviderAuth } from '../context/auth-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ProviderAuth>
        <Component {...pageProps} />
      </ProviderAuth>
    </ThemeContextProvider>
  );
}

export default MyApp;
