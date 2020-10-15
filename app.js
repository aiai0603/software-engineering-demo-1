//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    disabled:false,
    color:"red",
    pricenum:3,
    price:[
      {
        available:0,
        count:2,
        money:3,
        name:"雪碧满3减2券",
        day:"2020.1.1-2021.1.1可用"
      },{
        available:0,
        count:2,
        money:3,
        name:"可乐满3减2券",
        day:"2020.1.1-2021.1.1可用"
      },{
        available:0,
        count:2,
        money:3,
        name:"芬达满3减2券",
        day:"2020.1.1-2021.1.1可用"
      },
      {
        available:1,
        count:2,
        money:3,
        name:"芬达满3减2券",
        day:"已过期"
      }, {
        available:1,
        count:2,
        money:3,
        name:"芬达满3减2券",
        day:"已使用"
      }
    ],
    score:[{
          day:"2020/10/11 12:00:31",
          title:"签到奖励",
          point:2
    },{
      day:"2020/10/4 12:00:31",
      title:"签到奖励",
      point:2
},{
  day:"2020/10/2 12:00:31",
  title:"签到奖励",
  point:2
},{
  day:"2020/10/1 14:00:31",
  title:"兑换商品",
  point:-500
},{
  day:"2020/10/1 12:00:31",
  title:"注册奖励",
  point:1000
}],
scorenum:506,
sign:"签到",
style:"qd"
  },
 

})