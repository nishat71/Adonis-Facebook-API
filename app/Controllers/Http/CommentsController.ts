// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment";

export default class CommentsController {

    public async store({ response, request }) {
        const payload = await request.all()
        console.log(payload);
        await Comment.create({
            post_id: payload.post_id,
            comment_text: payload.comment_text,
        })
        return response;
    }


}
