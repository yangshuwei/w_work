const user = require(`${YUS.servers}/UserModel/index`);
const reqUrl = require('../../config/serverUrlMap').serverUrl('/sg/cms/revision/getCategor.json');
console.log(reqUrl)
module.exports={
    'GET /':async (ctx,next) => {
        const data = {success:true,list:[]}
        // try {
            // let data = await user.getDetailData(reqUrl,{type:6});
        //    await ctx.success({data:data});
       ctx.body = data;
            // await ctx.render('UserView/index',{"data":data});
        // } catch (error) {
        //     console.log(error)
        //     next(error)
        // }
        
        // try {
            // await ctx.render('UserView/index',{"data":data});
        // } catch (error) {
        //     console.log(error)
        //     next(error)
        // }
        // console.log(JSON.stringify(ctx.request.header['user-agent'].toLowerCase()))
        // var deviceAgent = ctx.request.header["user-agent"].toLowerCase();
        // var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
        // console.log(agentID)
        
    },
    'GET /customError':async(ctx,next)=>{
        throw new CustomError(constants.CUSTOM_CODE.SOME_CUSTOM_ERROR)
    },
    'GET /httpError':async(ctx,next)=>{
        throw new HttpError(constants.HTTP_CODE.FORBIDDEN)
    }
    
}