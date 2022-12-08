/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `my-app`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-source-prismic",
    //   options: {
    //     repositoryName: "learn-gatsbyjs",
    //     customTypesApiToken:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImxlYXJuLWdhdHNieWpzLWNmNjk0NGVjLTNmNGUtNGQ5ZS1iMGI2LTc3NjE4NzQwZDkwYl80IiwiZGF0ZSI6MTY3MDQwNTQwMSwiZG9tYWluIjoibGVhcm4tZ2F0c2J5anMiLCJpYXQiOjE2NzA0MDU0MDF9.MQ9IAteiWg9R60S1T-1mw4-vgF-K3CtlYArHbWJR59k",
    //   },
    // },
  ],
};
