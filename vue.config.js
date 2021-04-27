module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/root.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"],
};
