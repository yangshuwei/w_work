const user = require(`${YUS.servers}/UserModel/index`);
console.log(user)
module.exports={
    'GET /':async (ctx,next) => {
        let data = await user.getDetailData('http://mobiletest.ehaier.com:38080/sg/cms/revision/getCategory.json',{type:6});
        console.log(data)
        await ctx.render('UserView/index',{"data":data});
    }
}
