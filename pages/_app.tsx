import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Provider } from "urql";

import { hashnodeClient } from "utils/hashnode";
import PlausibleProvider from "next-plausible";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={hashnodeClient}>
      <PlausibleProvider
        domain="henrikvt.com"
        selfHosted
        customDomain="https://plausible.henriktech.com"
        trackOutboundLinks={true}
      >
        <Component {...pageProps} />
      </PlausibleProvider>
      <Script
        async
        defer
        data-website-id="5be5a980-82fd-40f0-8f84-e5bed361223b"
        src="https://analytics.henriktech.com/umami.js"
      />
    </Provider>
  );
}

export default App;
