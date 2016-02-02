const webpack = require('webpack')

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: [ 'jasmine' ],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './unit-test.webpack.js'
    ],

    preprocessors: {
      './unit-test.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'spec' ],

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter')
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url', query: {limit: 10240} },
          { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' }
        ]
      },
      resolve: {
        modulesDirectories: [
          'components',
          'node_modules'
        ],
        extensions: ['', '.json', '.js']
      },
      plugins: [
        new webpack.NoErrorsPlugin(),
      ]
    },

    webpackServer: {
      noInfo: true
    }
  })
}
