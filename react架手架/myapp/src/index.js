import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// react router 在使用之前需要安装react-router-dom 包,然后引入到index.js入口文件中,
// BrowserRouter 是路由的其中一种,(还有一种是HashRouter);
// 引入的 BrowserRouter这个组件对象的作用是为了让所有的子组件都能够使用到路由的功能,
// 我们给App组件包裹 BrowserRouter这个组件,App的所有后代组件就可以使用BrowserRouter路由功能了.

import App from './APP';
// import './css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, document.querySelector('#app'));
