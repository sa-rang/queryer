module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Queryer App",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/queryer/" : "/",
};
