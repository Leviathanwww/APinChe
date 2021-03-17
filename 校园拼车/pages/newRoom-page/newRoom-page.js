// pages/newRoom-page/newRoom-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personalInfo:{
      id: 1,
      nickName: '方子焱',
      avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/VNElrs6Cu0DKPovwy70FIhfQlqW1ktZJwWDjCGvIdn2zs0W57Ymu9dlzdFb9l98FF734ibd02xTTFgUWiazJqia9w/132',
    },
    userInfo:{},
    member:[],
    location: "阳澄湖",
    destinationArray: [
      '阳澄湖校区',
      '独墅湖校区',
      '天虹',
      '本部',
      '观前街'
    ],
    index: 0,
    date: '2021-03-14',
    time: '00:00',
    orderItem:[
      {
        order1: 'true',
        value:'预约',
        checked:'true'
      },
      {
        order1: 'false',
        value:'实时'
      }],
    order: 'true',
    genderLimite: [
      {value: '无',
      limite1: 'false',
      checked: true
    },
      {
        value: '有',
        limite1: 'true'
      }
    ],
    limite:'false',
    gender:['男', '女'],
    index1: 0,
    teamNickName:'',
    teamLabel: '',
  },
// 返回目的地
  bindPickerChange:function (e) {
    console.log('输出内容下标为:' , e.detail)
    this.setData({
      index:e.detail.value,
    })
  },
// 返回打车方式
  bindRadioChange:function(e) {
    console.log('是实时房间吗' , e.detail.value)
    this.setData({
      order:e.detail.value
    })
  },
// 返回时间
  bindTimeChange:function(e) {
    console.log(e.detail.value)
    this.setData({
      time:e.detail.value
    })
  },
// 返回日期
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      limite: e.detail.value
    })
  },
// 获取性别限制
  genderChange:function(e) {
    console.log(e.detail.value)
    this.setData({
      limite: e.detail.value
    })
  },
// 获取昵称
  inputBack:function(e) {
    console.log(e.detail.value)
    this.setData({
      teamNickName: e.detail.value
    })
  },
// 获取车队签命
  labelInputBack:function(e) {
    console.log(e.detail.value)
        this.setData({
          teamLabel: e.detail.value
        })
  },
// 跳转到room页面并传输相关数据
  toRoom:function(e) {
    let member1 = this.data.personalInfo
    let member = []
    this.setData({
      ['personalInfo.isHost']: true
    })
    member.push(member1)
    this.setData({
      member: member
    })
    wx.redirectTo({
      url: '/pages/room-page/room-page?locationData='+this.data.location+'&destinationData='+this.data.destinationArray[this.data.index]+'&dateData='+this.data.date+'&timeData='+this.data.time+'&orderData='+this.data.order+'&limiteData='+this.data.limite+'&teamNickNameData='+this.data.teamNickName+'&teamLabelData='+this.data.teamLabel+'&memberData='+JSON.stringify(this.data.member) ,
      success:function(res) {
        console.log('转跳room成功')
      },
      fail:function(err){
        console('转跳room失败')
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    that.setData({
      location: options.locationData
    })
    wx.getUserInfo({
      lang: 'en',
      success:function(res) {
        console.log(res.userInfo)
        that.setData({
          userInfo:res.userInfo
        })
      },
      fail:function(err){
        console.log('信息获取失败')
      }
    })
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