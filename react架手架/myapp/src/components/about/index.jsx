import React, {Component} from 'react';
import {NavLink, Route, Redirect, Switch} from 'react-router-dom';
import News from '../news';
import Message from '../message';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About加载了</h2>
        <ul className="nav nav-tabs">
          <li>
            <NavLink activeClassName='myClassName'
                     to="/about/news"
                     className="list-group-item myActive">展示News组件</NavLink>
          </li>
          {/*
          二级路由的使用:
            简单理解它就是一个连接点进去之后,展示的组件中又有链接可以点,
            而且是需要基于前面路由链接点击加载后,后面的路由链接才会出现.
            About组件是在,about路由被点击的时候展示,
            About组件在展示的里面又有新的路由链接可以点击展示,点击后展示News组件
            所以二级路由在写的时候,to属性要写完整路由路径,
            to="/about/news" 表示就是news路由组件是about路由组件的子路由组件,
            必须要在about路由组件先加载后,才能再加载news组件
          */}
          <li>
            <NavLink activeClassName='myClassName'
                     to="/about/message"
                     className="list-group-item myActive">展示Message组件</NavLink>
          </li>
        </ul>
        {/* Route组件:当NavLink的to路径和Route的path路径匹配配成功后,展示对应的组件 */}
        <Switch>
          <Route path="/about/news" component={News}/>
          <Route path="/about/message" component={Message}/>
          {/* 概念: 凡是通过Route加载的组件都称为路由组件 */}
          {/* About是一级路由组件,News是About路由组件的子组件,是二级路由组件; */}
          {/* 只有1级路由组件渲染后,二级路由组件才可能渲染 */}
          <Redirect to="/about/news"/>
        </Switch>
      </div>
    )
  }
}

export default About;
