var app=getApp();
Page({
  onShow: function () {
    this.setData({
      price:app.globalData.price
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex:0,
    price:app.globalData.price
  },
  onTabsItemTap:function(event){
    let index=event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex:index,
    })
  }
})
