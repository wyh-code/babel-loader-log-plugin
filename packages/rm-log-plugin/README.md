## 安装依赖
```
npm i rm-log-plugin
```
## 配置webpack
```
const rmLog = require('rm-log-plugin')

module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options:{
              plugins: [
                [rmLog]
              ]
            }
          }
        ]
      }
    ]
  },
}
```