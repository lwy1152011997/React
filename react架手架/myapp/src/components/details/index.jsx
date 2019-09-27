import React, {Component} from 'react';

class Detail extends Component {
  // 如果一个路由组件展示的内容比较相似(结构,样式),只是数据上的变化,我们会只定义一个路由组件,然后动态的展示不同的数据
  // 我们如果想要点击对应的路由出现对应的展示数据,我们的数据id值必须要定义的一样,才可以一一对应起来
  // 要展示内容我们要根据id的值一直才能展示
  // 我们要获取到:id的值 要通过 this.props.match.id 来获取到
  /*
    注意点: 所有的路由组件,它们的props上都有,history,location,match 对象
           history 用来对路由的历史记录进行操作
           location 可以查看到当前的路由路径
           match 保存了路由的详细信息, params中保存了:id的值
  */
  // 命令式编程路由: 采用this.props.history.push() 等方法来对路由进行控制称为命令式编程路由写法
  // 一般如果我们要完成历史记录的前进后退就需要用到这个方式,常写在回调函数内
  // 声明式路由(路由导航连接):
  // react-router-dom 提供给我们 NavLink Link 组件 就是声明式路由,它们只会生成历史记录不能回退
  // 一般如果Link NavLink 不需要对页面进行前进或者后退操作我们就使用它,常常写在组件内
  state = {
    detail: [
      {id:1 , content: "姚麦组合啊"},
      {id:2 , content: "大联妹V5"},
      {id:3 , content: "曹芳打团很猛"}
    ]
  }
  render() {
    const {id} = this.props.match.params;
    const res = this.state.detail.find((item) => {
      return item.id === +id
    })
    console.log(res);
    return (
      <ul>
        <li>
          {res.content}
        </li>
      </ul>
    )
  }
}

export default Detail;
