import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `seelog.me`,
    description: `ろぐみ/SeeLogのポートフォリオ的なサイト`,
    siteUrl: `https://seelog.me`,
    ogLaunguage: `ja_JP`,
    icon: `src/images/icon.png`,
    author: `ろぐみ/SeeLog`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "config",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GATSBY_TRACKING_ID],
      },
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `seelog.me`,
        short_name: `seelog.me`,
        description: `ろぐみ/SeeLogのポートフォリオ的なサイト`,
        start_url: `/`,
        lang: `ja-JP`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
  ],
};

export default config;
