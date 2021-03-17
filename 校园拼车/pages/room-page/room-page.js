// pages/room-page/room-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberMax: 4,
    personalInfo:{
        id: 3,
        nickName: '方子焱',
        avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/VNElrs6Cu0DKPovwy70FIhfQlqW1ktZJwWDjCGvIdn2zs0W57Ymu9dlzdFb9l98FF734ibd02xTTFgUWiazJqia9w/132',
        isHost: true,
    },
    isMember: false,
    isBlock: false,
    userInfo:{},
    location: '苏大阳澄湖校区',
    destination: '苏大独墅湖校区',
    cost: 40,
    date: '2021-3-16',
    time: '00:00',
    order: 'true',
    genderLimite:'true',
    teamNickName:'一路向北',
    teamLabel: '世界那么大，我想去看看！',
    member:[
      {
        id: 1,
        nickName: '方子焱',
        avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/VNElrs6Cu0DKPovwy70FIhfQlqW1ktZJwWDjCGvIdn2zs0W57Ymu9dlzdFb9l98FF734ibd02xTTFgUWiazJqia9w/132',
        isHost: false,
      },
      {
        id: 2,
        nickName: '老王',
        avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/VNElrs6Cu0DKPovwy70FIhfQlqW1ktZJwWDjCGvIdn2zs0W57Ymu9dlzdFb9l98FF734ibd02xTTFgUWiazJqia9w/132',
        isHost: false,
      },
    ]
  },
  // 添加新成员(进入房间)
  addMember:function(e){
    let personalInfo = this.data.personalInfo
    let member = this.data.member
    let isMember = this.data.isMember
    if (isMember) {
      wx.showModal({
        content: '您已经上车了哦，请耐心等待发车吧！',
        showCancel: false,
      })
    }
    else{
      member.push(personalInfo)
      this.setData({
        member: member,
        isMember: true,
      })
      wx.showModal({
        content: '加入车队成功',
        showCancel: false,
      })
    }
    console.log(member)
  },
  // 退出房间
  exitRoom:function(e) {
    let that = this
    let member = this.data.member
    let personalInfo = this.data.personalInfo
    let isMember = this.data.isMember
    let index = 0
    for( let i = 0; i < member.length; i++) {
      if ( personalInfo.id == member[i].id) {
        index = i
      }
    }
    wx.showModal({
      content: '确定要退出车队吗?亲！',
      success:function(res) {
        if(res.confirm) {
          // 转移房主
          if(member[index].isHost && member.length != 1) {
            while(true){
              let j = Math.floor(Math.random() * member.length)
              if ( j != index) {
                member[j].isHost = true
                break
              }
            }
            console.log('转移房主成功')
          }
          member.splice(index, 1)
          isMember = false
          that.setData({
            member: member,
            isMember: isMember
          })
        }
      }
    })
    
  },
  // 改变房间是否被锁的状态，只有房主有此权限
  changeBlock:function(e) {
    let isBlock = !this.data.isBlock
    this.setData({
      isBlock: isBlock
    })
  },
  // 查看个人信息
  lookInfo:function(e){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this
    let personalInfo = this.data.personalInfo
    let member = this.data.member
    let isMember = false
    that.setData({
      date: options.dateData,
      time: options.timeData,
      location: options.locationData,
      destination: options.destinationData,
      order: options.orderData,
      genderLimite: options.limiteData,
      teamNickName: options.teamNickNameData,
      teamLabel: options.teamLabelData,
      member: JSON.parse(options.memberData),
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
    for(let i = 0; i < member.length; i++) {
      if ( member[i].id == personalInfo.id) {
        isMember = true
      }
    }
    this.setData({
      isMember: isMember
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