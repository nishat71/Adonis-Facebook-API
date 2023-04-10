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
Route.delete('/posts/:id', 'PostsController.destroy').as('posts_delete');


Route.get('/likes', 'LikesController.view').as('likes_view');
Route.post('/likes', 'LikesController.store').as('likes_store');
Route.post('/likes/:id', 'LikesController.update').as('likes_update');



Route.post('/comments', 'CommentsController.store').as('comments_store');

Route.post('/replies', 'RepliesController.store').as('replies_store');

Route.get('/user', 'UsersController.view').as('users_view');
Route.post('/user', 'UsersController.store').as('users_store');





// Route.get('/userInfo/create', 'UsersController.create').as('userInfo_create');

//view
// Route.get('/userInfo', async (ctx) => {
//  return new UsersController().view(ctx)
// }).as('userInfo_view');

// post
// Route.post('/userInfo', ({ request }) => {
//   return request.body();
// }).as('userInfo.create');