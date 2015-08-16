var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var route = require("./routes/route");
var log4js = require('log4js');
var log = require('./log');
var compression = require('compression');


//设置基础
var app = express();
var wind = express();

//设置项目名称
app.locals.appName = "wind";
app.use("/"+app.locals.appName,wind);


//模版引擎 模版渲染文件夹
app.set('views', path.join(__dirname, 'views'));
//视图后缀
app.set('view engine', 'ejs');

//网站ico
app.use(favicon(__dirname + '/public/favicon.ico'));


app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//配置静态资源目录
app.use("/"+app.locals.appName,express.static("public"));

wind.use(function(req, res, next){
    //项目名称
    res.locals.rootPath = "/"+app.locals.appName;
    //项目views绝对路径
    res.locals.rootView = __dirname+"/views";

    next();
});



//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});


//日志记录
log.use(app);

//路由配置
route.init(wind);



// 404错误
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// 500错误
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.message);
    res.render('error', {
        message: err.message,
        error: err
    });
});


module.exports = app;
