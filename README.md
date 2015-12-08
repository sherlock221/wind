# wind-startup
 前后端解耦 快速启动项目. 		 前后端解耦 快速启动项目. 

   ![image](http://upload-images.jianshu.io/upload_images/326507-636c79b490629a95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

	 
## 为什么要解耦
一条原则  专业人做专业事情 提升效率

因此,职责划分为server后端负责 (model)数据接口，fe前端负责展现和交互


## 特性
这是一个基础的前后端解耦 启动项目 它具有以下特性:

1. 页面控制分离(路由)
2. 数据分离
3. 开发环境分离
4. 部署分离
5. 自动化部署方案(正在完善....)
6. 对接dubbo服务等(正在完善...)


## SPA
控制层 : 单页应用 具有其先天的前端特性, 具备前端控制页面的能力 包括路由控制 展现控制等.

数据层 : spa 都是基于ajax json的数据交互方式

视图层 : 前端模版引擎的流行使得这一层效率很高

这一层目前使用的是 angularjs 作为spa核心. 并且 集成了一些 周边第三方优秀lib


## Dynamic

Dynamic 是另外的一种模式 具备动态页面能力  基于nodejs 实现分离.

控制层  : 基于express4 的强大router 来进行设计

视图层  : 后端渲染 采用ejs2.0 , hb.js 等   前端渲染依然可以选择自己喜欢等引擎.

数据层  : 同样采用 ajax json的数据交互方式

引申 大前端模式

## heavy(正在开发...)

这样模式 称之为大前端模式 .同样使用node 相比Dynamic模式  heavy除了夺取了页面控制权  还将server 的controller 也收入囊下.

对于dubbo型态的企业架构
提供 node-dubbo 的中间件  

这一层目前正在开发.....


## 关于选择形态建议

spa 的项目 更�适合 管理系统 移动端webap 重交互的应用

Dynamic 适合需要动态页面能力 服务端渲染 首屏幕渲染   不论轻重形态都适合   推荐的模式
 		 
heavy 适合团队前端较多 



## 安装

    $ npm install -g wind-startup


## 快速开始(spa)

	wind testSpa -t spa
   
## 启动xiangm(spa)

   $ 在webstorm中打开testSpa项目 点击index.html来启动
   

## 快速开始(Dynamic)

  cd 进入你的工作目录 , 输入项目名称 即可快速创建项目(默认是dynamic)

    $ wind movie 
 
## 安装依赖(Dynamic)

    $ cd movie && npm install

## 启动项目(Dynamic)
	
    $ npm start
    打开浏览器访问  http://localhost:3001/wind/movie/index  
   

## 命令参数

    -h, --help          output usage information
    -V, --version       output the version number
    -d  --description   项目描述
    -ar,--author        作者
    -t, --type          类型 [sap , dynamic] 默认dynamic
    
 
    
    
