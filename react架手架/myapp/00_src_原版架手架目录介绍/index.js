import React from 'react';
import ReactDOM from 'react-dom';
// 上面两个包是必须引入的,因为你的应用是基于react来开发的,所有的依赖都是要基于它们

import './index.css'; // 引入的是公共样式
import App from './App';

import * as serviceWorker from './serviceWorker';
// 这是对PWA的注册,语法的意思是将 ./serviceWorker这个包中暴露的所有内容然后重名名为serviceWorker
// 无论./serviceWorker这个包中暴露的内容名为什么都会被重名名为serviceWorker
// 反正无论他暴露出的是什么数据类型,那么他就是什么数据类型
// 如果用不到PWA,那么就不需要使用,直接删掉

ReactDOM.render(<App />, document.getElementById('root'));
// 将App组件渲染到 public文件夹下 index.html文件中的 root容器中

/* 这个js文件的文件名是不能修改的,它是整个应用的入口文件 */
