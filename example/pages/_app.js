import { SnipcartProvider } from '../../use-snipcart';

function MyApp({ Component, pageProps }) {
  console.log('SnipcartProvider', SnipcartProvider)
  return (
    <SnipcartProvider>
      <Component {...pageProps} />
    </SnipcartProvider>
  );
}

export default MyApp;