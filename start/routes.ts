import Route from '@ioc:Adonis/Core/Route'
import View from '@ioc:Adonis/Core/View';
import Database from '@ioc:Adonis/Lucid/Database'
import UsersController from 'App/Controllers/Http/UsersController';


Route.get('/', async ({ view }) => {
  return view.render('welcome');
})


Route.get('/userInfo', 'UsersController.view').as('userInfo_view');
Route.post('/userInfo', 'UsersController.store').as('userInfo_store');
Route.post('/userInfo/:id', 'UsersController.update').as('userInfo_update');
Route.delete('/userInfo/:id', 'UsersController.destroy').as('userInfo_delete');


Route.get('/userInfo/likes', 'LikesController.view').as('userInfo_likeView');
Route.post('/userInfo/likes', 'LikesController.store').as('userInfo_likeStore');





// Route.get('/userInfo/create', 'UsersController.create').as('userInfo_create');

//view
// Route.get('/userInfo', async (ctx) => {
//  return new UsersController().view(ctx)
// }).as('userInfo_view');

// post
// Route.post('/userInfo', ({ request }) => {
//   return request.body();
// }).as('userInfo.create');