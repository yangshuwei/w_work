/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:03:02 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-14 11:03:02 
 */
"use script"
module.exports = class{
    static async _404(ctx,next){
        await next();
        if(ctx.status == '404'){
            await ctx.render('default/404',{
                title:'Not Found'
            })
        }
    }
    static async _500(ctx,next){
        await next();
        if(ctx.status == '500'){
            await ctx.render('default/500',{
                title:'500'
            })
        }
    }
}