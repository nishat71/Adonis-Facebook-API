// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User';
import Post from 'App/Models/Post';
import Like from 'App/Models/Like';



export default class UsersController {
    // public async view({view}) {
    //     const users = await Database.from('users').select('*');
    //     return view.render('userInfo/view', { users })
    // }

    // public create({view}) {
    //     return view.render('userInfo/create')
    // }




    //  public async index({view}){
    //    const upUser= await Post.query()
    //    .preload("reacts")
    //    .preload("comments",(replyQ)=>{
    //     replyQ.preload("replies")
    //     }).orderBy('posts.id', 'desc')
    //    return upUser
    // }

    // public async store({response,request}){
    //     const payload= await request.all()
    //     await Post.create({
    //         user_id:payload.user_id,
    //         post_desc:payload.post_desc,
    //         disabled:payload.disabled
    //     })
    // }
    // public async update({request,response,params}){
    //     const payload = await request.all()
    //     await Post.query().where('id',params.id).update({
    //         post_desc:payload.post_desc
    //     })
    // }
    // public async delete({request,params}){
    //     const post = await Post.findOrFail(params.id)
    //     await post.delete()
    // }




    // public async store({response,request}){
    //     const payload= await request.all()
    //     await React.create({
    //         post_id:payload.post_id,
    //         total_react:payload.total_react,
    //     })
    // }
    // public async update({response,request,params}){
    //     const payload = await request.all()
    //     await React.query().where('post_id',params.id).update({
    //         total_react:payload.total_react
    //     })
    // }
}
