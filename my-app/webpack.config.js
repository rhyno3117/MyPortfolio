const path = require('path');

module.exports = {
  mode: 'production', // Set mode to 'production'
  entry: './js/script.js', // Adjust the path here
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Add other loaders for CSS, images, etc., as needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
