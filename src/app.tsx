import Taro, { Component, Config } from "@tarojs/taro"
import Index from "./pages/tabBar/index/index"
import "taro-ui/dist/style/index.scss"

import "./app.less"

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
            "pages/tabBar/index/index",
            "pages/tabBar/user/index",
            "pages/game/index",
            "pages/ordering/index",
            "pages/playingCards/index"
        ],
        tabBar: {
            color: "#333333",
            selectedColor: "#6190E8",
            backgroundColor: "#fff",
            list: [
                {
                    iconPath: "./assets/images/game-default.png",
                    selectedIconPath: "./assets/images/game-active.png",
                    pagePath: "pages/tabBar/index/index",
                    text: "首页"
                },
                {
                    iconPath: "./assets/images/person-default.png",
                    selectedIconPath: "./assets/images/person-active.png",
                    pagePath: "pages/tabBar/user/index",
                    text: "我的"
                }
            ]
        },
        window: {
            backgroundTextStyle: "light",
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: "WeChat",
            navigationBarTextStyle: "black"
        },
        navigateToMiniProgramAppIdList: ["wx18a2ac992306a5a4"]
    }

    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return <Index />
    }
}

Taro.render(<App />, document.getElementById("app"))
