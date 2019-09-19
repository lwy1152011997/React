// 展示评论列表组件
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item';
import './index.css';

class CommentsList extends Component {
  // 约束接收的数据类型
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  }
  render() {
    const {comments, delComment} = this.props;
    return(
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {/* 如果列表有长度就不显示文字,没有长度就实现文字 */}
        <h2 style={{display: comments.length ? 'none' : 'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((item, index) => {
              return <CommentItem item={item} key={index} delComment={delComment} index={index}/>
              {/*  */}
            })
          }
        </ul>
      </div>
    )
  }
}

export default CommentsList;
