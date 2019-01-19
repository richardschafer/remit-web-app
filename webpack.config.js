const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/client/index.jsx'],
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GRAPHQL_ENDPOINT_URI': JSON.stringify(
        process.env.GRAPHQL_ENDPOINT_URI,
      ),
      'process.env.FIREBASE_API_KEY': JSON.stringify(
        process.env.FIREBASE_API_KEY,
      ),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.FIREBASE_AUTH_DOMAIN,
      ),
      'process.env.FIREBASE_DB_URL': JSON.stringify(
        process.env.FIREBASE_DB_URL,
      ),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
        process.env.FIREBASE_PROJECT_ID,
      ),
    }),
  ],
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
