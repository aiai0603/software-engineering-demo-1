//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  onShow: function () {
    this.setData({
      price:app.globalData.pricenum,
      score:app.globalData.scorenum,
      style:app.globalData.style,
      sign:app.globalData.sign
    })
  },

  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    score:0,
    price:0,
    style:"qd",
    sign:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  sign:function(){
      if( app.globalData.sign=="签到")
      {
        console.log("ok")
        app.globalData.sign="已签"
        app.globalData.style="qd-1"
        app.globalData.scorenum=app.globalData.scorenum+2
        var newpoint={
          day: util.formatTime(new Date()),
          title:"签到奖励",
          point:2
        }
        app.globalData.score.unshift(newpoint);
        this.setData({
            style:"qd-1",
            sign:"已签",
            score:app.globalData.scorenum
        })

      

      }else{

      }
  },
  gotologs: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },


  gotoscore: function() {
    wx.navigateTo({
      url: '../score/score'
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})