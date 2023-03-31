const path = require('path');

module.exports = {
      resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  } ,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
            }
        
      }
    ]
    } ,
  

 



  
};
