const path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './preview/src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'sky-toolkit-core': path.join(__dirname, '../packages/sky-toolkit-core/'),
      'sky-toolkit-ui': path.join(__dirname, '../packages/sky-toolkit-ui/'),
    },
    extensions: ['.js', '.json', '.scss'],
    modules: [path.resolve(__dirname, 'packages'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(
          ExtractTextWebpackPlugin.extract({
            use: [
              { loader: 'css-loader' },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [
                    path.resolve(__dirname, '../packages/sky-toolkit-core/node_modules'),
                    path.resolve(__dirname, '../packages/'),
                  ],
                },
              },
            ],
            fallback: 'style-loader',
          })
        ),
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  plugins: [new ExtractTextWebpackPlugin('styles.css')],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    inline: true, // inline mode (set to false to disable including client scripts (like livereload)
    open: true, // open default browser while launching,
    openPage: '',
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  devtool: 'eval-source-map',
};

module.exports = config;
