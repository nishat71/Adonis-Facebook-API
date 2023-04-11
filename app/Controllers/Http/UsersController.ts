// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User';
import { schema, rules } from '@ioc:Adonis/Core/Validator'



export default class UsersController {

    public async view() {
        const users = await User.all();
        return users;
    }



    // public async store({ response, request }) {
    //     const payload = await request.all()
    //     console.log(payload);

    //     await User.create({
    //         name: payload.name,
    //         email: payload.email,
    //         password: payload.password
    //     })
    //     return response;
    // }


    public async store({ response, request }) {
        const createUserSchema = schema.create({
            name: schema.string({ trim: true }, [
                rules.maxLength(12),
                rules.minLength(3),
                rules.unique({ table: 'users', column: 'name' }),
                rules.regex(/^[a-zA-Z-_]+$/)
            ]),
            email: schema.string([
                rules.email()
            ]),
            password: schema.string([
                rules.minLength(4)
            ])
        })

        try {
            const payload = await request.validate({ schema: createUserSchema })
            console.log(payload);

            await User.create({
                name: payload.name,
                email: payload.email,
                password: payload.password
            })
            return response;
        }
        catch (error) {
            response.badRequest(error.messages)
        }
    }




}


















