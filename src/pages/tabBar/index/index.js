import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { AtGrid, AtAvatar } from "taro-ui"

export default class Index extends Component {
    config = {
        navigationBarTitleText: "首页"
    }

    constructor() {
        super(...arguments)
        this.state = {
            title: "酒桌Gameing"
        }
    }
    onShareAppMessage(res) {
        return {
            path: "/pages/tabBar/index/index"
        }
    }

    componentWillMount() {
        Taro.getUserInfo().then(
            (res)=> {
            var userInfo = res.userInfo
            console.log(userInfo);
            this.state.avatarUrl = userInfo.avatarUrl;
            console.log(this.state.avatarUrl);
            this.state.nickName = userInfo.nickName;
            var nickName = userInfo.nickName
            var avatarUrl = userInfo.avatarUrl
            var gender = userInfo.gender //性别 0：未知、1：男、2：女
            var province = userInfo.province
            var city = userInfo.city
            var country = userInfo.country
          })
    }

    componentDidMount() {

    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    shouldComponentUpdate(nextProps, nextState) {}

    praise = e => {
        Taro.navigateToMiniProgram({
            appId: "wx18a2ac992306a5a4",
            path: "pages/apps/largess/detail?accountId=5686224",
            envVersion: "release",
            success(res) {
                // 打开成功
                console.log(res)
            }
        })
    }
    goPage = e => {
        if (e.url) {
            Taro.navigateTo({
                url: e.url
            })
        }
    }

    render() {
        return (
            <View className='home'>
                <View className='title'> {this.state.title} </View>
                <AtAvatar circle image={this.state.avatarUrl}></AtAvatar>
                <AtGrid
                    onClick={this.goPage}
                    hasBorder={false}
                    data={[
                        {
                            url: "/pages/keepList/index",
                            image: "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
                            value: "keep清单"
                        },
                        {
                            url: "/pages/pukeGame/index",
                            image:
                                "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
                            value: "扑克牌"
                        },
                        {
                            url: "/pages/game/index",
                            image: "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
                            value: "文字翻牌"
                        },
                        {
                            url: "/pages/diceGame/index",
                            image: "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
                            value: "摇色子"
                        },
                        {
                            url: "/pages/rotateGame/index",
                            image:
                                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
                            value: "大转盘"
                        }
                    ]}
                />{" "}

            </View>
        )
    }
}
