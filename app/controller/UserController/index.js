const user = require(`${YUS.servers}/UserModel/index`);
const reqUrl = require('../../config/serverUrlMap').serverUrl('/sg/cms/revision/getCategory.json');
const reqUrl2 = require('../../config/serverUrlMap').serverUrl('/sg/cms/revision/newProductList.json');
console.log(reqUrl)
module.exports={
    'GET /': async  (ctx,next) => {
        
        let data = await user.getDetailData(reqUrl,{type:6});
        let firstId = data.data[0].id;
        let params = {
            pageIndex: 1,
            pageSize: 20,   
            categoryId:firstId,
            sortType: 1,
            provinceId: 2,
            cityId: 716,
            streetId: 12024726,
            regionId: 944
        }
        let data2 = await user.getClassData(reqUrl2,params);
        data = data != "null" ? data.data: null;
        await ctx.render('UserView/index',{"data":data,data2:data2});
        
    }
}