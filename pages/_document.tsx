import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Cloudflare Web Analytics --> */}
          <script
            async
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "e76ccca08dcc4e0d8e4e3752f8dc5d12"}'
          ></script>
          {/* <!-- End Cloudflare Web Analytics --> */}
          <script
            async
            defer
            data-website-id="5be5a980-82fd-40f0-8f84-e5bed361223b"
            src="https://analytics.henriktech.com/umami.js"
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
