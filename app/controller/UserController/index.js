const user = require(`${YUS.servers}/UserModel/index`);
const reqUrl = require('../../config/serverUrlMap').serverUrl('/sg/cms/revision/getCategory.json');
console.log(reqUrl)
module.exports={
    'GET /':async (ctx,next) => {
        let data = await user.getDetailData(reqUrl,{type:6});
        // console.log(JSON.stringify(ctx.request.header['user-agent'].toLowerCase()))
        // var deviceAgent = ctx.request.header["user-agent"].toLowerCase();
        // var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
        // console.log(agentID)
        await ctx.render('UserView/index',{"data":data});
    }
}