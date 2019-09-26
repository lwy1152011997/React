import React, {Component} from 'react';
import {Link, Route, Redirect, NavLink, Switch} from 'react-router-dom';
// react-router 中的 Link组件
// 它的作用类似于a标签,是一个跳转链接,
// Link组件中用to属性来指示点击这个链接后会跳转到哪个指定组件(类似于a标签的href属性),但是不会刷新界面,
// Link组件最终渲染到页面还是会渲染为a标签,而且会添加一次浏览历史记录,修改网址

// Route路由 组件对象的作用是用来展示:当Link组件被触发时,Link组件指定的是哪个路由组件,Route就会展示哪个组件的内容
// 详细看37行

// NavLink 组件功能和Link组件功能类似,但是在渲染为a标签后会多一个active类名,这样可以区分出哪个按钮被点击选中了
// 注意点: NavLink中如果要改变被选中时的按钮样式,可以通过activeClassName属性来对它进行样式设置

// Redirect 组件,用来做重定向的,一旦组件被重新加载,他它就会修改网址到to属性中指定的网址去,同时还会产生一次历史记录

import About from './components/about';
import Home from './components/home';
import './css/index.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              <Link className="list-group-item" to="/about">About</Link>
              {/* 表示点击它要跳转到about路由组件,然后加载显示 */}
              <NavLink className="list-group-item myActive" to="/home" activeClassName='myClassName'>Home</NavLink>
            </div>

          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <div>
                  <Switch>
                    <Route path="/about" component={About} />
                    {/* path属性的值需要写 和 Link中to属性值一样,表示这个Route组件要展示的是'/about'这个路径 */}
                    {/* component表示匹配成功后要展示的组件是哪个组件 */}
                    {/* 总结: 表示Link中的to和Route中的path匹配成功'/about'路由路径后,就加载About组件展示*/}
                    {/* 要想成功的点击路由跳转对应的路由组件,to和path的路径必须要一样 */}
                    {/* 只有匹配上才会加载其中的一个路由,匹配不上就不会加载 */}
                    <Route path="/home" component={Home} />
                    <Redirect to="/home"/>
                    {/* Redirect组件,一旦网址没有匹配上路由,就会重定向到指定的路由网址.一般用来做登录页面时候用 */}
                    {/* Redirect重定向组件我们一般都放在最后,如果放前面每次组重新渲染都是会先触发它,那么后面的组件就没有机会渲染了 */}
                  </Switch>
                  {/* Switch,组件的作用是:能让内部的组件有且只有一个会生效,只要匹配成功其中的一个路由,其他的就不会生效 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
