const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "C:/Users/Lenovo/Desktop/Company Symbol", to: "E:/CBMS" },
        
      ],
    }),
  ],
};