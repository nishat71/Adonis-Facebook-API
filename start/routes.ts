import Route from '@ioc:Adonis/Core/Route'
import View from '@ioc:Adonis/Core/View';
import Database from '@ioc:Adonis/Lucid/Database'
import UsersController from 'App/Controllers/Http/UsersController';


Route.get('/', async ({ view }) => {
  return view.render('welcome');
})


Route.get('/posts', 'PostsController.view').as('posts_view');
Route.post('/posts', 'PostsController.store').as('posts_store');
Route.post('/posts/:id', 'PostsController.update').as('posts_update');
Route.post('/postsDestroy/:id', 'PostsController.destroy').as('posts_delete');


Route.get('/likes', 'LikesController.view').as('likes_view');
Route.post('/likes', 'LikesController.store').as('likes_store');
Route.post('/likes/:id', 'LikesController.update').as('likes_update');



Route.post('/comments', 'CommentsController.store').as('comments_store');

Route.post('/replies', 'RepliesController.store').as('replies_store');



Route.get('/users', 'UsersController.view').as('users_view');
Route.post('/users', 'UsersController.store').as('users_store');



Route.post('/login', async ({ auth, request, response }) => {
  const payload = request.all()

  const email = payload.email
  const password = payload.password

  try {
    await auth.use('web').attempt(email, password)
    response.redirect('/')
  } catch {
    return response.badRequest('Invalid credentials')
  }
})





Route.post('/logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  response.redirect('/login')
})

