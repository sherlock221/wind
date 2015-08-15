var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var route = require("./routes/route");
var log4js = require('log4js');
var log = require('./log');
var compression = require('compression')


//设置根
var app = express();
//设置cmw项目
var cmw = express();

//添加全局
app.use("/cmw",cmw);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.enable('trust proxy');
//app.get('trust proxy');



//app.locals.__dirname = __dirname;
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//配置静态资源
//app.use(express.biz(path.join(__dirname, 'public')));
//app.use(express.biz("public"));
app.use("/cmw",express.static("public"));
//app.use('/cmw', express.biz('/public') );


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
route.init(cmw);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
      console.error(err.message);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.message);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
