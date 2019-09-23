import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './css/index.css';
class Lists extends Component{
  static propTypes = {
    searchName: PropTypes.string.isRequired
  }
  /* 需求:这个组件中有三种数据状态:没有输入的时候显示请输入搜索内容,搜索过程中显示搜索中,搜索完成后展示内容 */
  state = {
    // 数据状态有3种
    firstView: true, // 初次显示文字
    isLoading: false,// 搜索中
    showMsg: null, // 未请求回来数据时
    err: null // 请求失败时
  }

  // 这个生命周期函数的意思表示这个组件将要接收到的属性
  // 这个生命周期函数不会在首次渲染的时候执行,只会在组件接收到新的props时候执行(父组件重新渲染)
  // 一般我们用在父组件对组件传入新的props的时候使用
  /*
    nextProps: 是一个对象,它可以接收到,父组件的传递过来的上次发生改变的数据({searchName:'xxxx'})
  */
  componentWillReceiveProps(nextProps, nextState) {
    // 输入内容后将页面变为loading
    this.setState({
      firstView: false,
      isLoading: true
    })

    // 使用axios发送请求获取数据
    // res会接收到请求地址返回来的数据,我们操作res就可以拿到我们想要的数据
    axios.get(`https://api.github.com/search/users?q=${nextProps.searchName}`)
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          showMsg: res.data.items.map((item) => {
            return (
              {
                name: item.login,
                url: item.html_url,
                image: item.avatar_url
              }
            )
          })
        })
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          showMsg: null,
          err: '移不动,联不通,信不过'
        })
      })


  }

  render() {
    const {firstView, isLoading, showMsg, err} = this.state;
    // 判断
    if (firstView) {
      // 初次
      return (
        <h2>请输入需要搜索的内容</h2>
      )
    } else if (isLoading) {
      // 加载中
      return (
        <h2>Loading...</h2>
      )
    }else if (showMsg) {
      // 请求到数据展示
      return (
        <div className="row">
          {
            showMsg.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <a href={item.url} target="_blank">
                    <img src={item.image}
                         style={{'width': '100px'}}
                         alt='tags'/>
                  </a>
                  <p className="card-text">{item.name}</p>
                </div>
              )
            })
          }
        </div>
      )
    }else {
      // 在react中不能直接展示对象的,所以err错误信息不能设置为对象,要为字符串
      // 错误
      return (
        <h2>{err}</h2>
      )
    }

  }
}
export default Lists;
