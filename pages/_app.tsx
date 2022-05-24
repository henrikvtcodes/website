import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain="henriktech.com"
      selfHosted
      customDomain="https://plausible.henriktech.com"
      trackOutboundLinks={true}
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
export default MyApp;
