module.exports = {
  testEnvironment: 'jsdom',
  testMatch:[
    "**/?(*.)+(spec|test|unit).mjs" // 匹配单元测试文件
  ],
  transform: {
    "^.+\.[j|t]sx?$": "babel-jest",
  }
};