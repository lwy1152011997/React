// 高阶组件的命名一般都取名为这个withHoc
/*
  什么是高阶组件?
    本质上高阶组件就是一个函数,通过暴露出去一个函数,
    这个函数的形参接收到的实参是一个组件,执行这个函数返回出来的是一个新的组件
*/

import React, {Component} from 'react';
// 使用高阶函数的形式将参数一个一个的传入组件
export default function (titlename) {
  return function withHoc(OutComponent) {
    // 暴露出去的函数的形参 outComponent 接收的参数是一个外部传入的组件
    return (
      // 注意点: 1因为返回出去的组件名不确定,所以我们组件就不取名,相当于匿名组件
      class extends Component {
        // 为定义的组件取名(格式为`外层组件名(${组件形参.name})`)
        // 开发者工具中可以看到Xxx(组件名)取名,就表示它是高阶组件
        static displayName = `Form(${OutComponent.name})`;
        /* 定义公共的方法 */
        state = {
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

        commitVal = (ev) => {
          ev.preventDefault();
          const {username, pwd , phoneNumber} = this.state;
          // 判断是登录还是注册
          if (phoneNumber) {
            alert( `用户名是${username}, 密码是${pwd}, 手机号码是${phoneNumber}` );
          } else {
            alert( `用户名是${username}, 密码是${pwd}`)
          }
          /* 清空输入框中的内容 */
          this.setState( {
            username: '',
            pwd: '',
            phoneNumber:''
          } )
        }

        // render的第一种写法
        render() {
          // 接收到的组件,实际渲染会在这里进行,这样就可以在这个匿名组件内定义公共的方法(公共的代码,对代码进行复用)
          return (
            /* 注意点: 2我们定义的公共方法,这个匿名组件是不用的,实际要用到的是传进来的组件.
                       (公共的state和方法)
                       我们通过props(组件的标签属性)的方式传给这个组件
            */
            <div>
              <h2>{titlename}</h2>
              <OutComponent getVal={this.getVal}
                            commitVal={this.commitVal}
                            state={this.state}/>
            </div>
          )
        }

        // // render的第二种写法
        // render () {
        //   // 现将公共的方法保存在一个对象中
        //   const mapMethodToProps = {
        //     getVal: this.getVal,
        //     commitVal: this.commitVal
        //   }
        //   return (
        //     <OutComponent {...mapMethodToProps}/>
        //   )
        // }
      }
    )
  }
}
