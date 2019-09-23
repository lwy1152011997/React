import React, {Component} from 'react'; // 引入创建组件的依赖
import PropTypes from 'prop-types';

import './index.css';
class CommentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    delComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  delComent = () => {
    // 对象的解构,再解构
    const { index, item: {name} } = this.props;
    // 点击的时候确认删除评论
    window.confirm(`确定要删除${name}的评论吗?`);
    this.props.delComment(index);

  }
  render() {
    const {name, content} = this.props.item;
    return(
      <li className="list-group-item">
        <div className="handle">
          <button className='mybtn'
                  href="javascript"
                  onClick={this.delComent}>删除</button>
        </div>
        <p className="user"><span>{name}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}

export default CommentItem
