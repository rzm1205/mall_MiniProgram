// components/common/r-tabbar/r-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //赋值当前index
    modifycurIndex(e){
      const dataset = e.currentTarget.dataset;
      this.setData({
        curIndex:dataset.index
      })
      //子组件向父级传值
      this.triggerEvent('queryCurIndex',{index:this.data.curIndex})
    }
  }
})
