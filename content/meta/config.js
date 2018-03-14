const colors = require("../../src/styles/colors");

module.exports = {
  homeTitle: "Personal blog",
  siteTitle: "Hervé's PersonalBlog",
  shortSiteTitle: "PersonalBlog",
  siteDescription: "This is my personal blog.",
  siteUrl: "https://www.hervehuneau.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "hervé huneau",
  authorTwitterAccount: "hervehuneau",
  // info
  infoTitle: "hervé huneau",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Hervé's PersonalBlog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/herveh44" },
    { name: "twitter", url: "https://twitter.com/hervehuneau" },
    { name: "facebook", url: "http://facebook.com/hervehuneau" }
  ]
};
