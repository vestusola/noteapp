<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('note/create', 'NoteController@SaveNote');

Route::get('/note/all', 'NoteController@Index');

Route::get('/note/edit/{id}', 'NoteController@EditNote');

Route::post('/note/update/{id}', 'NoteController@UpdateNote');

Route::delete('/note/delete/{id}', 'NoteController@DeleteNote');

Route::post('/note/several/delete', 'NoteController@RemoveNote');