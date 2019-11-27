import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './theme/custom-variables.scss' // 全局引入一次即可
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
  */

  config: Config = {
    pages: [
      'pages/projectList/index',
      'pages/projectDetail/index',

      'pages/index/index',
      'pages/testpage/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      backgroundColor:'#5a5a5a',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '云云流程',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh:false
    },
    tabBar: {
      color: "#666",
      selectedColor: "#385bbd",
      backgroundColor: "#ffffff",
      borderStyle: 'black',
      //数组第一项为首页
      list: [{
        pagePath: "pages/projectList/index",
        iconPath: "./assets/menu/flow.png",
        selectedIconPath: "./assets/menu/flow-active.png",
        text: "项目"
      }, {
        pagePath: "pages/testpage/index",
        iconPath: "./assets/menu/mission.png",
        selectedIconPath: "./assets/menu/mission-active.png",
        text: "任务"
      }, {
        pagePath: "pages/index/index",
        iconPath: "./assets/menu/template.png",
        selectedIconPath: "./assets/menu/template-active.png",
        text: "模板"
      }, {
        pagePath: "pages/index/index",
        iconPath: "./assets/menu/person.png",
        selectedIconPath: "./assets/menu/person-active.png",
        text: "个人"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
