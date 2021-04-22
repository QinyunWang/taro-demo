import {Component} from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor() {
    super();
    this.state = {
      city: 'unknown',
      name: 'Someone',
      src: ''
    }
  }

  componentWillMount() {
    const _this = this;
    Taro.getLocation({}).then(res => _this.setState({
      city: res.city
    }))

    Taro.login({
      success() {
        Taro.getUserInfo({
          success(res) {
            _this.setState({
              name: res.userInfo.nickName,
              src: res.userInfo.avatarUrl
            })
          },
          fail(res) {
            console.warn(res)
          }
        })
      }
    })
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index'>
        <Image className='avatar' src={this.state.src} />
        <View>你好<Text className='name'>{this.state.name}</Text></View>
        <Text>你现在的位置：{this.state.city}</Text>
      </View>
    )
  }
}
