module.exports = {
  map: false,
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-mq-keyframes': {},
    'css-mqpacker': { sort: true },
    'autoprefixer': {
      overrideBrowsersList: [
        "> 0.4%",
        "not IE 11",
        "not OperaMini all",
        "not IE_Mob 11",
        "edge >= 12",
        "chrome >= 30",
        "Samsung > 9.2",
        "chromeandroid >= 58",
        "android >= 10",
        "ff >= 60",
        "safari >= 11.1",
        "ios >= 11.1",
        "opera >= 62"
      ],
      cascade: false,
    },
    'postcss-csso': {
      restructure: true,
      sourceMap: false,
      usage: null,
      comments: 'none'
    }
  }
}