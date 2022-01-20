## 安装依赖
```
npm i position-log
```
## 配置webpack
```
const positionLog = require('position-log')

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
                [positionLog]
              ]
            }
          }
        ]
      }
    ]
  },
}
```