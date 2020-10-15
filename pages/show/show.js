// pages/show/show.js
var app=getApp();
Page({
  onShow: function () {
    this.setData({
      disabled: app.globalData.disabled,
      color:app.globalData.color,

    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    disabled:app.globalData.disabled,
    color:app.globalData.color
  },

  get(){
    wx.showToast({
      title: '领取成功！', // 标题
      icon: 'success',  // 图标类型，默认success
      duration: 1500  // 提示窗停留时间，默认1500ms
    }),
    app.globalData.color="grey",
    app.globalData.disabled=true,
    app.globalData.pricenum+=1,
    console.log(app.globalData.disabled)
    this.setData({
     color:"grey",
     disabled:true
    })
    var newprice={
      available:0,
      count:2,
      money:4,
      name:"雪碧满4减2券",
      day:"2020.1.1-2021.1.1可用"
    }
    app.globalData.price.push(newprice)

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})