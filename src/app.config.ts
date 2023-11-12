export default defineAppConfig({
  pages: ['pages/index/index', 'pages/my/index', 'pages/task/clockInTask/clockInTask'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true,
    color: '#999999',
    selectedColor: '#333333',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'assets/images/grades_on.png',
        iconPath: 'assets/images/grades.png',
        text: '首页',
      },
      // {
      //   pagePath: 'pages/cate/index',
      //   selectedIconPath: 'images/tabbar_cate_on.png',
      //   iconPath: 'images/tabbar_cate.png',
      //   text: '分类',
      // },
      // {
      //   pagePath: 'pages/cart/index',
      //   selectedIconPath: 'images/tabbar_cart_on.png',
      //   iconPath: 'images/tabbar_cart.png',
      //   text: '购物车',
      // },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'assets/images/my_on.png',
        iconPath: 'assets/images/my.png',
        text: '个人中心',
      },
    ],
  },
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index', 'nutui/index', 'request/index', 'css/index'],
    },
  ],
})
