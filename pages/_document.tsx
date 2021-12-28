import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Cloudflare Web Analytics --> */}
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "e76ccca08dcc4e0d8e4e3752f8dc5d12"}'
          ></script>
          {/* <!-- End Cloudflare Web Analytics --> */}
          <script
            async
            defer
            data-website-id="092500af-34de-4128-93c8-a7b8fdac19d9"
            src="https://analytics.henriktech.com/umami.js"
            data-cache="true"
            data-do-not-track="true"
            data-host-url="https://analytics.henriktech.com"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
