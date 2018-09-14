/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:03:25 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-14 11:03:25 
 */
const user = require(`${YUS.servers}/ProductDetail/index`);
console.log(user)
module.exports={
    'GET /detail':async (ctx,next) => {
        let data = await user.getDetailData('http://mobiletest.ehaier.com:38080/sg/cms/revision/getCategory.json',{type:6});
        let data2 = await user.getLogin('http://mobiletest.ehaier.com:38080/v3/platform/web/member/captchaLogin.json?userName=15811596211&password=haier123&captcha=&isNew=1&noLoading=true')
        console.log('------'+data)
        await ctx.render('ProductDetailView/index',{"data":data,"data2":data2});
    }
}
