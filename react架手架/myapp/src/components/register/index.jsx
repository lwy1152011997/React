import React, {Component} from 'react';
import withHoc from '../with-hoc'; // 引入定义好的高阶组件

class Register extends Component {
/*  state = {
    username: '',
    pwd: '',
    phoneNumber: ''
  }

  // 受控组件收集表单数据
  getVal = (stateName) => {
    return (ev) => {
      this.setState( {
        [stateName]: ev.target.value
      } )
    }
  }

  register = (ev) => {
    ev.preventDefault();
    const {username, pwd, phoneNumber} = this.state;
    alert( `注册的用户名是${username},密码是${pwd},手机号码是${phoneNumber}` );
    {/!* 清楚输入框中的内容 *!/}
    this.setState( {
      username: '',
      pwd: '',
      phoneNumber: ''
    } )
  }*/


  render() {
    const {getVal, commitVal} = this.props;
    const {username, pwd, phoneNumber} = this.props.state;
    return (
      <div>
        <form onSubmit={commitVal}>
          账户:<input type="text" onChange={getVal( 'username' )} value={username}/>
          密码:<input type="password" onChange={getVal( 'pwd' )} value={pwd}/>
          密码:<input type="text" onChange={getVal( 'phoneNumber' )} value={phoneNumber}/>
          <input type="submit" value="注册"/>
        </form>
      </div>
    )
  }
}
//在使用高阶组价你的时候,根据需求定义,然后再调用,传入标题,复用h2标签
export default withHoc('Register')(Register);
