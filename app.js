/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:04:34 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2019-03-29 11:35:22
 */
const Koa = require('koa');
const app = new Koa();
const config = require('./app/config/base');
const index = require(`${w.app}/index`);
index(app);
app.listen(w.port,()=>{
  console.log(`服务启动 localhost:${w.port}||环境：${process.env.NODE_ENV}`)
});