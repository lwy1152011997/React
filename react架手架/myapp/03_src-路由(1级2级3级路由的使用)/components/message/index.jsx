import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Detail from "../details";

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
          {id: '3', content: '曹芳'},
        ]
      })
    },500)
  }

  render() {
    const {messages} = this.state;
    return (
      <div>
        <ul>
          {
            messages.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/about/message/${item.id}`}>{item.content}</Link>
                  {/**/}
                </li>
              )
            })
          }
        </ul>
        <Route path="/about/message/:id" component={Detail}></Route>
        {/*
         三级路由的使用:
         简单理解:路由组件中的路由组件中的路由组件.称为三级路由
         三级路由组件要根据上一级的路由组件被点击的时候展示出来,
         它的 path属性的的写法: path="about/message/:id"
         :id 可以匹配到 <Link to={`/about/message/${item.id}`}> 中的 最后一个位置id;
         component 组件的显示会根据匹配的组件展示组件中的内容
         */}
      </div>
    )
  }
}

export default Message;
