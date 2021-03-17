// pages/lobby-page/lobby-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:"苏大阳澄湖校区",
    room:[{
        id:0,
        label:"快上车",
        nickName:"一路向北",
        owner:"方子焱方子方子焱",
        departureTime:"00:00",
        destination:"天虹",
        number: 2,
      },
      {
        id: 1,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },
      {
        id: 2,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },
      {
        id: 3,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },
      {
        id: 4,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },
      {
        id: 5,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },{
        id: 6,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },{
        id: 7,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },
      {
        id: 8,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },
      {
        id: 9,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 1,
      },
      {
        id: 10,
        nickName:"一路向北向向向123",
        label:"快上车车打车打车打车打车打",
        owner:"方子焱",
        departureTime:"00:00",
        destination:"本部",
        number: 4,
      }
    ]
  },

  toNewRoom: function(){
    wx.navigateTo({
      url: '/pages/newRoom-page/newRoom-page?locationData=' + this.data.location,
    })
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