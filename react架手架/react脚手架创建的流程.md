## react架手架的创建流程
  + npm i create-react-app -g 全局安装,并配置环境变量
    (react脚手架的主要技术用到了react框架,webpack打包工具,es语法,eslint语法检查,babel编译工具)
    (使用脚手架开发的特点在于可以 模块化,组件化,工程化开发)
  + 安装好之后 使用命令 create-react-app 项目名 
    (这样就可以创建一个基于react的架手架)
   
  + yarn start 命令,启动开发环境服务器
  + yarn build 生成项目上线时需要的代码
     * 项目的目录下会多一个build文件夹
     * serve -s build 命令来启动打包后的项目
  + yarn test 测试代码
  
  
## 项目文件内的目录介绍
 + build文件夹 是使用yarn build 命令之后生成的上线项目的代码文件,如果没有使用yarn build 命令,是不会存在的;
 + node_modules文件夹 是react架手架所依赖包的文件夹
 + pubilc文件夹 开发的时候用来放置静态资源
    * 网页的小图标.ico
    * index.html 我们的组件最终都会渲染到这个html文件中,然后展示到浏览器中
    * manifest.json 生成安卓,IOS,window应用的配置,不考虑这些平台的话可以删掉
  
 + src文件夹 开发的时候,所有的项目代码都需要在这个文件夹下进行
    * index.js 这个文件名是不能改变的,它是整个项目应用的入口文件
    * 实际项目中有待补充...
 
 + .gitignore git仓库的忽略文件
 + package.json 项目使用到的依赖包
    * 注意点 这个文件中的 react-scripts 这个配置项:包含了所有项目中的webpack配置
    * scripts 配置项是运行项目的指令
    * browserslist 浏览器兼容性的配置
 + yarn.lock 文件不用管它,是下包的缓存文件记录


## 一些命名文件夹的意思
  + bin 表示里面放的是一些可执行文件
