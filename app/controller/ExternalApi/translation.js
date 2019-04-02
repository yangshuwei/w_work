module.exports = {
  'GET /ssr/api/translation.json': async (ctx, next) => {
    const returnData = {
      "success": true,
      "data": [
        {
          "id": 1,
          "title": "男孩落入洛杉矶污水系统后获救"
        },
        {
          "id": 2,
          "title": "独立厨师交流点子"
        },
        {
          "id": 3,
          "title": "移民者关注墨西哥边境政策"
        },
        {
          "id": 4,
          "title": "成千上万的美国教师罢工要求加薪"
        },
        {
          "id": 5,
          "title": "五十年前，马丁·路德·金遇刺身亡。"
        }
      ]
    }
    ctx.body = returnData;
  }
}