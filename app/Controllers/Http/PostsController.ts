// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User';
import Post from 'App/Models/Post';
import Like from 'App/Models/Like';



export default class PostsController {
    public async view() {
        const userPost = await Post.query().orderBy('posts.id', 'desc')
            .preload('likes')
            .preload('comments', (replyQuery) => {
                replyQuery.preload('replies')
            })
        return userPost;
    }


    public async store({ response, request }) {
        const payload = await request.all()
        console.log(payload);
        await Post.create({
            user_id: payload.user_id,
            post_text: payload.post_text,
            disabled: payload.disabled
        })
        return response;
    }



    public async update({ request, params }) {
        const payload = await request.all()
        await Post.query().where('id', params.id).update({
            post_text: payload.post_text
        });
    }


    public async destroy({ params, response }) {
        const post = await Post.findBy('id', params.id);
        if (post) {
            post.delete();
            return response.redirect().back();
        }
    }

    // public async view() {
    //     const newUser = await User.query().preload('posts', (postsQuery) => {
    //         postsQuery.preload('likes')
    //         // postsQuery.preload('comments')
    //         postsQuery.preload('comments', (commentsQuery) => {
    //             commentsQuery.preload('replies')
    //         })
    //     })
    //     return newUser;
    // }

}
