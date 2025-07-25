import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/themecontext';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>  
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
