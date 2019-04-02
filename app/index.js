
const path = require('path');
const bodyParser = require('koa-bodyparser'); //koa-bodyparser
const static = require('koa-static');
const views = require('koa-views')

const json = require('koa-json')

const logUtil = require('./untils/log')
// const onerror = require('koa-onerror') //？删
const logger = require('koa-logger')

// const render = require('koa-art-template');
const config = require('./config/base.js');
const router = require(YUS.router + 'index');

const CustomError = require('./untils/customError').CustomError;
const HttpError = require('./untils/customError').HttpError;
const constants = require('./untils/constants')
const format = require('./untils/response').format;

// const restful = require('./untils/rest')
// // const status404 = require('./middle/404')
// // const status500 = require('./middle/500')

let index = function (app) {

    app.use(userAgent());
    // app.use(async (ctx, next) => {
    //     await next();
    // });

    //1.错误提示
    // onerror(app);
    //2.解析post
    app.use(bodyParser());
    //3.json格式化输出
    app.use(json({ json: true }));
    //4.打印请求
    app.use(async (ctx, next) => {
        //响应开始时间
        const start = new Date();
        //响应间隔时间
        var ms;
        try {
            //开始进入到下一个中间件
            await next();
            ms = new Date() - start;
            //记录响应日志
            logUtil.logResponse(ctx, ms);

        } catch (error) {
            console.log(error)
            ms = new Date() - start;
            //记录异常日志
            logUtil.logError(ctx, error, ms);
        }
    });
    // app.use(logger())
    //5.静态资源
    app.use(static(w.public));
    //6.加载模板引擎
    app.use(views(YUS.view, {
        map: { html: 'ejs' }
    }));
    // render(app, {
    //     root: YUS.public.view,
    //     extname: '.html',
    //     debug: process.env.NODE_ENV !== 'production'
    //   });

    // app.use(restful);
    // 错误统一处理
    app.use((ctx, next) => {
        return next().catch((err) => {
            let code = 500
            let msg = 'unknown error'

            if (err instanceof CustomError || err instanceof HttpError) {
                const res = err.getCodeMsg()
                ctx.status = err instanceof HttpError ? res.code : 200
                code = res.code
                msg = res.msg
            } else {
                ctx.status = code
                console.error('err', err)
            }
            ctx.body = format({}, code, msg)
        })
    })
    //7.路由
    app.use(router.router);
    app.use(router.methods);

    //404 500
    app.use(async () => {
        throw new HttpError(constants.HTTP_CODE.NOT_FOUND)
    })

    // app.use(status404);
    // app.use(status500);
    app.on('error', function (err, ctx) {
        console.log(err);
        //ctx.body = err;
    });
}

module.exports = index;


