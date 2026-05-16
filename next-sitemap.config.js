/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://programmers-hub-hazel.vercel.app",
  generateRobotsTxt: true,

  // important for dynamic pages
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/"),
      await config.transform(config, "/discussions"),
      await config.transform(config, "/login"),
      await config.transform(config, "/signup"),
      await config.transform(config, "/about"),
      await config.transform(config, "/contact"),
    ];
  },
};