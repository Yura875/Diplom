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
Route::resource("/user",\App\Http\Controllers\API\UserController::class);
Route::get("/user/{id}",[\App\Http\Controllers\API\UserController::class,'show']);
Route::post("/user/login",[\App\Http\Controllers\API\UserController::class,'login']);

// Email verification
Route::get('email/verify/{id}', 'App\Http\Controllers\API\VerificationController@verify')->name('verification.verify');
Route::get('email/resend', 'App\Http\Controllers\API\VerificationController@resend')->name('verification.resend');

