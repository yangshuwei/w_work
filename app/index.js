const path = require('path');
const bodyParser = require('koa-bodyparser'); //koa-bodyparser
const static = require('koa-static');
const views = require('koa-views')

const json = require('koa-json')
const onerror = require('koa-onerror') //？删
const logger = require('koa-logger')

const render = require('koa-art-template');
const config = require('./config/base.js');
const router = require(YUS.router + 'index');

// const status404 = require('./middle/404')
// const status500 = require('./middle/500')

let index = function (app) {
    //1.错误提示
    onerror(app);
    //2.解析post
    app.use(bodyParser());
    //3.json漂亮打印
    app.use(json({json:true}));
    //4.打印请求
    app.use(logger())
    //5.静态资源
    app.use(static(YUS.public));
    //6.加载模板引擎
    app.use(views(YUS.view, {
      map : {html:'ejs'}
    }));
    // render(app, {
    //     root: YUS.public.view,
    //     extname: '.html',
    //     debug: process.env.NODE_ENV !== 'production'
    //   });
    //7.路由
    app.use(router.router);
    app.use(router.methods);
    //404 500
    // app.use(status404);
    // app.use(status500);
    app.on('error', function(err,ctx){
        console.log(err);
        //ctx.body = err;
    }); 
}

module.exports = index;


