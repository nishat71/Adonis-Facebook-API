// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Reply from "App/Models/Reply";

export default class RepliesController {

    public async store({ response, request }) {
        const payload = await request.all()
        console.log(payload);
        await Reply.create({
            comment_id: payload.comment_id,
            reply_text: payload.reply_text,
        })
        return response;
    }
}
