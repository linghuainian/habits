// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    word: 'World'
    
  },
  onClick:function(){
    this.setData({
      word:'girl'
    })
  }
})
