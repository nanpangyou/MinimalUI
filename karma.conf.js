const webpackConfig = require('@vue/cli-service/webpack.config.js')
const path = require("path")
module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'tests/**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    exclude: ['*/components/**'],// 暂时没有生效
    webpack: webpackConfig,

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    autoWatch: true,

    browsers: ['ChromeHeadless']
  })
}