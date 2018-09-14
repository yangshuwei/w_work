/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:04:34 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-14 11:04:34 
 */
const Koa = require('koa');
const app = new Koa();
const config = require('./app/config/base');
const index = require(`${YUS.app}/index`);
index(app);
app.listen(YUS.port,()=>{
  console.log(`服务启动 localhost:${YUS.port}||环境：${process.env.NODE_ENV}`)
});