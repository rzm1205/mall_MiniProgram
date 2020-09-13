// pages/home.js
import {getHomeDate,getTabbarData} from '../../service/homeAPI.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    tabbars:['篮球','羽毛球','乒乓球'],
    tabbars_content:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._queryHomeDataMethod()
    this._queryTabbarmethod()
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

  },
  // 方法事件
  _queryHomeDataMethod(){
     //获取首页数据
     getHomeDate().then(res => {
      // 1.取出轮播所有的数据
      const banners = res.data.exbAreaList.map(item => {
        return item.exbAreaImg
      })
      const recommends = res.data.exbAreaList.filter((item ,index)=> {
        return index > 2
      })
      // console.log(recommends)
      // 2.赋值数据
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  _queryTabbarmethod(){
    getTabbarData().then(res => {
      // 1.取出tabbar所有的数据
      const tabbars = res.data.data
      
      //数组的扩展
       let list = []
       list = tabbars.map( item =>{
         return item.secCategoryList
       })
       let list2 = []
       for( let item of list){
         list2.push(...item)
       }
      // 2.赋值数据
      this.setData({
        tabbars_content: list2
      })
    })
  },
  //获取子组件tabbar点击的当前index
  queryCurIndex(e){
    const index = e.detail.index;
    //以后可以根据从子组件获取的index，给后台传值，走接口
    this._queryTabbarmethod()
  }

})