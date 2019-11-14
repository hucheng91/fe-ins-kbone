export default {
  // 获取feed分类配置
  getFeedTabs: {
    method: 'get',
    url: '/wx/config/feed_tabs'
  },
  // 视频流列表
  getFeedList: {
    method: 'get',
    url: '/qapp/wx/test'
  },
  login: {
    method: 'post',
    url: '/wx/login'
  },
  // 获取用户信息
  getUserInfo: {
    method: 'post',
    url: '/wx/userinfo'
  }
}
