module.exports = {
  map: false,
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-mq-keyframes': {},
    'css-mqpacker': {sort: true},
    'autoprefixer': {
      browsers: ['> 2%', 'last 6 versions', 'not ie <= 11'],
      cascade: false,
      flexbox: 'no-2009'
    },
    'postcss-csso': {
      restructure: true,
      sourceMap: false,
      usage: null,
      comments: 'none'
    }
  }
}