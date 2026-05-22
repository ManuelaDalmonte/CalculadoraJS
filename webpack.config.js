const path = require('path');

module.exports = {
  entry: './src/calculadora.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    static: './src',
    port: 3000,
    open: true,
  },
};