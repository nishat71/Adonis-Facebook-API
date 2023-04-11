// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {


    
    public async store({ auth, request, response }) {
        const payload = request.all()
        
        const email = payload.email
        const password = payload.password

        await auth.use('web').attempt(email, password)
            response.redirect('/')


        // try {
        //     await auth.use('web').attempt(email, password)
        //     response.redirect('/')
        // } catch {
        //     return response.badRequest('Invalid credentials')
        // }
    }

}
