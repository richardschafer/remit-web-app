const path = require('path');

module.exports = {
  entry: {
    app: [
      './src/client/index.jsx',
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
};
