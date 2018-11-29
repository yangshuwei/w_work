/*
 * @Author: yangshuwei 
 * @Date: 2018-11-29 16:47:11 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-11-29 16:57:41
 */
module.exports = {
  'GET /ssr/api/login.json': async (ctx, next) => {
    const returnData = {
      "success": true,
      "data": {
        "login": true
      }
    }
    ctx.body = returnData;
  }
}