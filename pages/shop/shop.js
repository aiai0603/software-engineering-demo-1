var util = require('../../utils/util.js');
var app=getApp();
Page({
    buy(e){
       var good = e.currentTarget.dataset.item;
       if(good.point>=app.globalData.scorenum)
       {
        wx.showToast({
          title: '积分不足',
          icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
          duration: 2000     
        })  
       }else{
        let that = this;
        wx.showModal({
              title:"确认",
              content:"将扣除500积分，您确定吗？",
              success:function(res){
               
              if(res.confirm){
                  app.globalData.scorenum-=good.point;
                 
                  that.setData({
                    score:that.data.score-good.point
                  })
                  wx.showToast({
                  title: '兑换成功',
                  icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
                  duration: 1000     
                })  

                var newprice={
                  available:0,
                  count:1,
                  money:3,
                  name:"可乐满3减1券",
                  day:"2020.1.1-2021.1.1可用"
                }
                app.globalData.price.push(newprice);

                var newpoint={
                  day: util.formatTime(new Date()),
                  title:"兑换商品",
                  point:-500
                }
                app.globalData.score.unshift(newpoint);


                app.globalData.pricenum+=1;
              }
              else if(res.cancel){
                wx.showToast({
                  title: '已经取消',
                  icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
                  duration: 1000     
                })  
              }}
        })
       }
    },
  /**
   * 页面的初始数据
   */
  data: {
      score:0,
      shop:[
        {
          index:0,
            src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4073847680,4000747855&fm=26&gp=0.jpg",
            title:"可口可乐满3减1券",
            point:500
        },{
          index:1,
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4073847680,4000747855&fm=26&gp=0.jpg",
          title:"可口可乐满3减2券",
          point:600
        },{
          index:2,
          src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4073847680,4000747855&fm=26&gp=0.jpg",
          title:"可口可乐满3减2.5券",
          point:700
        }
      ]
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
     score: app.globalData.scorenum,
    

    })
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
