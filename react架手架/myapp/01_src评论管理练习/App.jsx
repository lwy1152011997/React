// App组件一般叫做应用主组件,和 index.js 入口文件同级
// 应用主组件做的事情就,引入其他子组件,然后将App组件自身组件暴露出去

import React from 'react';

import AddComment from './components/add-comment';
import CommentsList from './components/comments-list';

class App extends React.Component {
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
  // 用来获取到输入的信息后更新展示
  updateComments = (comments) => {
    this.setState({
      comments: [comments,...this.state.comments]
    })
  }

  // 用来删除信息,通过判断传入的i和comments中的index是否相等,相等就删除,不等就保留
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
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment updateComments={this.updateComments}/>
          <CommentsList comments={comments} delComment={this.delComment} />
        </div>
      </div>
    )
  }
}

export default App;
