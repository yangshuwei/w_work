module.exports = {
  'GET /ssr/api/logout.json': async (ctx, next) => {
    const returnData = {
      "success": true,
      "data": {
        "login": false
      }
    }
    ctx.body = returnData;
  }
}