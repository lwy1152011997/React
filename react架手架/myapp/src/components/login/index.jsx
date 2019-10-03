import React, {Component} from 'react';

import withHoc from '../with-hoc'; // 引入定义好的高阶组件

class Login extends Component {

  /*state = {
    username: '',
    pwd: ''
  }

  // 受控组件收集表单数据
  getVal = (stateName) => {
    return (ev) => {
      this.setState( {
        [stateName]: ev.target.value
      } )
    }
  }

  login = (ev) => {
    ev.preventDefault();
    const {username, pwd} = this.state;
    alert( `用户名是${username},密码是${pwd}` );
    {/!* 情况输入框中的内容 *!/}
    this.setState( {
      username: '',
      pwd: ''
    } )
  }*/
  // 使用高阶组件的方式就不用上面的操作了
  render() {
    const {getVal, commitVal} = this.props;
    const {username, pwd} = this.props.state;
    return (
      <div>
        <form onSubmit={commitVal}>
          账户:<input type="text" onChange={getVal( 'username' )} value={username}/>
          密码:<input type="password" onChange={getVal( 'pwd' )} value={pwd}/>
          <input type="submit" value="登录"/>
        </form>
      </div>
    )
  }
}

export default withHoc('Login')(Login);
