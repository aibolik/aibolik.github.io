module.exports = {
  siteTitle: "Aibol Kussain | Developer, Tech blogger", // Site title.
  siteTitleShort: "AK WebSite", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Aibol Kussain | Personal Website ", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://aibolik.github.io", // Domain of your website without pathPrefix.
  siteDescription: "Website and blog of Aibo Kussain | Web Developer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-96757849-4", // GA tracking ID. 
  // TODO: setup disqus
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  // TODO: setup categories for posts
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  // Probably can be skipped
  userName: "Aibol Kussain", // Username to display in the author segment.
  userTwitter: "aibolik_", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Minsk, Belarus", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/aibolik",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/aibolik_",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:aibolikdev@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "© 2018 Aibol Kussain", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#765E9C", // Used for setting manifest and progress theme colors.
  backgroundColor: "#4A4F69" // Used for setting manifest background color.
};
