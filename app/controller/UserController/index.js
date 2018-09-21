/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:03:29 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-09-20 16:34:57
 */
const user = require(`${YUS.servers}/UserModel/index`);
const ua = require('../../middle/userAgentCount');
module.exports={
    'GET /': async  (ctx,next) => {
        let data = await user.getDetailData({type:6});
        console.log(data)
        // ua.userAgentCount(ctx,next)
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
        let data2 = await user.getClassData(params);
        console.log(data2)
        await ctx.render('UserView/index',{"data":data,data2:data2});
        
    }
}