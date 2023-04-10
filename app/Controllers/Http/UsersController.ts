// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User';
import Post from 'App/Models/Post';
import Like from 'App/Models/Like';



export default class UsersController {

    public async view() {
        const users = await User.query().preload('posts')
        return users;
    }


    public async store({ response, request }) {
        const payload = await request.all()
        console.log(payload);
        await User.create({
            name: payload.name,
            email: payload.email,
            password: payload.password
        })
        return response;
    }



}
