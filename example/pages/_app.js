import { SnipcartProvider } from '../../use-snipcart';

function MyApp({ Component, pageProps }) {
  return (
    <SnipcartProvider>
      <Component {...pageProps} />
    </SnipcartProvider>
  );
}

export default MyApp;