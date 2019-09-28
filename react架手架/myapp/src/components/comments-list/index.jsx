// 展示评论列表组件
import React, {Component} from 'react';
import {subscribe} from 'pubsub-js';
/*
comments-list 要订阅消息数据,接收add-commnet组件发布的消息数据
订阅消息使用 subscribe() 方法
subscribe('事件名', (msg, data) => {对data的数据处理})
参数: msg是发布消息的组件传递来的事件名,
     data是发布消息的组件传递来的数据
*/

import CommentItem from '../comment-item';
import './index.css';

class CommentsList extends Component {

  // 定义数据状态
  state = {
    comments: [
      {
        name: 'jerry',
        content: 'i am jerry'
      },
      {
        name: 'tom',
        content: 'i am tom'
      },
    ]
  }
  // 订阅消息数据,更新数据状态
  componentDidMount() {
    subscribe('ADD_COMMENTS', (msg, data) => {
      this.setState({
        comments: [data, ...this.state.comments]
      })
    })
  }

  // 删除评论项
  delComment = (i) => {
    this.setState(
      {
        comments: this.state.comments.filter((item,index) => {
          return  i !== index
        })
      }
    )
  }

  render() {
    const {comments} = this.state;
    return(
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {/* 如果列表有长度就不显示文字,没有长度就实现文字 */}
        <h2 style={{display: comments.length ? 'none' : 'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((item, index) => {
              return <CommentItem item={item} key={index} delComment={this.delComment} index={index}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default CommentsList;
