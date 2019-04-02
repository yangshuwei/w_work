module.exports = {
  'GET /ssr/api/news.json': async (ctx, next) => {
    const returnData = {
      "success": true,
      "data": [
        {
          "id": 1,
          "title": "Boy Rescued After "
        },
        {
          "id": 2,
          "title": "Independent Chefs Exchange Ideas"
        },
        {
          "id": 3,
          "title": "Migrants Bring Attention to US-Mexican Border Policies"
        },
        {
          "id": 4,
          "title": "Thousands of US Teachers Strike to Demand Higher Pay"
        },
        {
          "id": 5,
          "title": "Fifty Years Ago, Martin Luther King was Assassinated"
        }
      ]
    }
    ctx.body = returnData;
  }
}