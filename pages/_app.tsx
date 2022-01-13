import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

import theme from "../components/themeChange";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <ChakraProvider>
        <Component {...pageProps} />
        <Script
          async
          defer
          data-website-id="5be5a980-82fd-40f0-8f84-e5bed361223b"
          src="https://analytics.henriktech.com/umami.js"
        />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
