import request from './network.js'
// 例子
export function getHomeDate() {
  return request({
    method:"post",
    url:'/exb/getExhibitonInitData',
    data:{
      languageType:1
    }
  })
}
export function getTabbarData() {
  return request({
    method:"post",
    url:'/7FGuide/getCategoryMenuData',
    data:{
      robUuid:'6d090be39a6740f78ecd1db157837b5b'
    }
  })
} 
