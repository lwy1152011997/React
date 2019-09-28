/* 这个文件是项目的入口文件,webpack会以这个文件为入口打包相关的文件
   主要做两个事情:
      > 引入应用主组件
      > 渲染应用主组件(因为应用主组件会引入其他的子组件,所以渲染App就会渲染其他子组件)
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; // 引入
ReactDOM.render(<App/>, document.querySelector('#app')); // 渲染
