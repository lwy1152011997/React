import React from 'react';
import Login from './components/login';
import Register from './components/register';
class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Register />
      </div>
    )
  }
}

export default App;
/*
  高阶组件(以登录注册为例子):

*/
