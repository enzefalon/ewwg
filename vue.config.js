module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/main.scss";`
      }
    }
  }
};
