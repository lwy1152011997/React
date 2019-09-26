import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Message extends Component {
  state = {
    messages: []
  }

  // 一般发送请求都在componentDidMount这个生命周期函数中进行
  // 如果页面一开始就需要数据展示,就在这个生命周期函数中发送请求
  // 如果页面的数据展示需要用户操作来进行展示,会更多在componentWillReceiveProps这个生命周期函数中进行
  componentDidMount() {
    // 定时器模拟请求到数据后更新state
    setTimeout(() => {
      this.setState({
        messages: [
          {id: '1', content: '麦迪,姚明'},
          {id: '2', content: '大联妹'},
          {id: '3', content: '没有一个认识的'},
        ]
      })
    },500)
  }

  render() {
    const {messages} = this.state;
    return (
      <ul>
        {
          messages.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/about/message/${item.id}`}>{item.content}</Link>
                {/*  */}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Message;
