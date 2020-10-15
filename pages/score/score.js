var app=getApp();
Page({
  onShow: function () {
    this.setData({
      scorenum:app.globalData.scorenum,
      score:app.globalData.score
    })
  },
  data: {
    score:[],
    scorenum:0,
    array: ['全部', '增加', '减少'],
    objectArray: [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '增加'
      },
      {
        id: 2,
        name: '减少'
      }
    ],
    index: 0
 
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    if(e.detail.value==0)
    {
      this.setData({
        score:app.globalData.score
      })
    }else if(e.detail.value==1){
     var i;
     var temp=[];
     for(i=0;i<app.globalData.score.length;i++)
     {
       if(app.globalData.score[i].point>0){
            temp.push(app.globalData.score[i]);
       }
     }
     this.setData({
      score:temp
    })
    }else{
      var i;
      var temp=[];
      for(i=0;i<app.globalData.score.length;i++)
      {
        if(app.globalData.score[i].point<0){
             temp.push(app.globalData.score[i]);
        }
      }
      this.setData({
       score:temp
     })
    }
  }
})