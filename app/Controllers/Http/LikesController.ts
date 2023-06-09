// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Like from "App/Models/Like";
import Post from "App/Models/Post";


export default class LikesController {

    public async view() {
        const TotalLikeCount = await Like.query()
        return TotalLikeCount;
    }

    public async store({ response, request }) {
        const payload = await request.all()
        console.log(payload);
        await Like.create({
            post_id: payload.post_id,
            total_like: payload.total_like,
            // like_count: payload.like_count,
            // profile_id: payload.profile_id
        })
        return response;
    }


    public async update({ request, params }) {
        const payload = await request.all()
        await Like.query().where('post_id', params.id).update({
            total_like: payload.total_like
            // like_count: payload.like_count
        });
    }

}
