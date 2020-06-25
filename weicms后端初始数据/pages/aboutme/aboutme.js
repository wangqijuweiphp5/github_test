//aboutme.js
//获取应用实例
var app = getApp()
Page({
  data: {
    img: '../../images/logo.png',
    title: "深圳市圆梦云科技有限公司",
    intro: "深圳市圆梦云科技有限公司是一家具有创新思维的互联网公司，主要提供的服务有互联网软件开发，包括微信公众平台服务，企业社区，商城产品，教育培训等。公司由有多年互联网经验的人员组成，致力于提供优质的互联网产品和服务，是国内最具实力的微信开发商、社区开发商。旗下主要开源产品WeiPHP下载量达百万级别，被众多开发者安装使用。",
    contab: "联系方式",
    address: "深圳市龙岗区坂田街道中兴路10号",
    mobile: "0755-23729769",
    email: "weiphp@weiphp.cn"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url: app.url + 'addon/Cms/Cms/testLogin',
      data: { PHPSESSID: wx.getStorageSync('PHPSESSID') },
      success: function (res) {
        console.log(res);
      }
    })
  },
  callme: function () {
    wx.makePhoneCall({
      phoneNumber:  this.data.mobile
    })
  }
})