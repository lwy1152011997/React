// 添加评论组件
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddComment extends Component {
  static propTypes = {
    updateComments: PropTypes.func.isRequired
  }
  /* 使用受控组件的方式来收集表单输入的数据,采用this.setState()和onChange事件来收集表单中的数据,就叫做受控组件 */
  state = {
    name: '',
    content: ''
  }
  // 高阶函数
  updateVal = (statename) => {
    return (ev) => {
      this.setState({
        [statename]: ev.target.value
      })
    }
  }

  // onSubmit事件会在表单的submit按钮点击时候触发
  // form表单中的submit按钮会默认提交刷新页面,所以要禁止它的默认事件行为
  // 用来将收集到的表单数据给更新数据状态的方法使用
  submitComment = (ev) => {
    ev.preventDefault();
    const {name, content} = this.state;
    // 需求: 如果输入的内容为空,那么就提示输入的内容不能为空
    if (!name || !content) {
      return alert('用户名或者内容不能为空');
    }
    this.props.updateComments({name, content});

    // 需求:提交完成后情况输入框中的内容
    // 1首先将需要清空的内容置为空
    this.setState({
      name: '',
      content: ''
    })
  }
  render() {
    // 2然后获取到需要置空的内容, 然后将输入框的value值置为需要置空的内容 >54行
    const {name, content} = this.state;
    return (
      <div className="col-md-4">
        <form className="form-horizontal" onSubmit={this.submitComment}>
          <div className="form-group">
            <label>用户名</label>
            <input type="text"
                   className="form-control"
                   placeholder="用户名"
                   onChange={this.updateVal('name')}
                   value={name}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control"
                      rows="6"
                      placeholder="评论内容"
                      onChange={this.updateVal('content')}
                      value={content}/>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddComment; // 将组件暴露出去
