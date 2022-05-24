// const { withSentryConfig } = require('@sentry/nextjs');

// const moduleExports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['c.tenor.com'],
//   },
// }

// const SentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore

//   authToken: process.env.SENTRY_AUTH_TOKEN,

//   silent: true, // Suppresses all logs
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
// };

// module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy({
  subdirectory: "js",
  scriptName: "stats",
  customDomain: "https://plausible.henriktech.com",
})({
  reactStrictMode: true,
  images: {
    domains: ["c.tenor.com"],
  },
});
