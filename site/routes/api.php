<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Users
Route::resource("/user", \App\Http\Controllers\API\UserController::class);
Route::get("/user/{id}", [\App\Http\Controllers\API\UserController::class, 'show']);
Route::post("/user/login", [\App\Http\Controllers\API\UserController::class, 'login']);

// Email verification
Route::get('/email/verify/{id}', 'App\Http\Controllers\API\VerificationController@verify')->name('verification.verify');
Route::get('/email/resend/{id}', 'App\Http\Controllers\API\VerificationController@resend')->name('verification.resend');

// Password reset
Route::post('/password/email', 'App\Http\Controllers\API\ForgotPasswordController@forgot');
Route::post('/password/reset', 'App\Http\Controllers\API\ForgotPasswordController@reset');

// File operations
Route::resource("/file", \App\Http\Controllers\API\FilesOperations::class);

// CategoryItem
Route::resource('/category', \App\Http\Controllers\API\CategoryController::class);
Route::get('/category/{id}', [\App\Http\Controllers\API\CategoryController::class, 'show']);

// Posts
Route::resource('/posts', \App\Http\Controllers\API\PostController::class);
Route::post('/posts/byParameters', [\App\Http\Controllers\API\PostController::class, 'byParameters']);
Route::get('/posts/byUser/{id}', [\App\Http\Controllers\API\PostController::class, 'byUser']);
Route::get('/posts/{id}', [\App\Http\Controllers\API\PostController::class, 'show']);
Route::post('/posts/deactivate', [\App\Http\Controllers\API\PostController::class, 'deactivatePost']);
Route::post('/posts/byId', [\App\Http\Controllers\API\PostController::class, 'byPostId']);

// City
Route::resource("/citys", \App\Http\Controllers\API\CitysController::class);
Route::get("/citys/{id}", [\App\Http\Controllers\API\CitysController::class,'show']);

// favorite
Route::resource('/favorite',\App\Http\Controllers\API\FavoriteController::class);

// Message
Route::resource('/message',\App\Http\Controllers\API\MessagesController::class);
Route::get('/message/{id}',[\App\Http\Controllers\API\MessagesController::class,'show']);
