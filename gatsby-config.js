const path = require("path");

module.exports = {
  siteMetadata: {
    title: "youtube-book-summary",
    siteUrl: "https://saijo-shota-biz.github.io/youtube-book-summary/",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        // components: path.join(__dirname, "src/components"),
        // template: path.join(__dirname, "src/template"),
        // utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ["UCaG7jufgiw4p5mphPPVbqhw", "UCFo4kqllbcQ4nV83WCyraiw"],
        apiKey: "AIzaSyDgFLKnrBdCu1HQYZ3mnICfnSO0bH7yHTc",
        maxVideos: 100000,
      },
    },
  ],
};
