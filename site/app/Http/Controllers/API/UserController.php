<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string|min:8',
        ]);
        if (!Auth::attempt($data)) {
            return response(["status" => -1]);
        }
        if (empty(Auth::user()->email_verified_at)) {
            Auth::user()->sendEmailVerificationNotification();
            return response(["status" => 2]);
        }
        $token = Auth::user()->createToken($data['email'])->token->id;
        return response(["status" => 1, "token" => $token]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'password_confirmation' => 'required|same:password'
        ]);
        if ($validator->fails()) {
            return response(["status" => -1, "msg" => $validator->errors()]);

        }

        $data = $request->all();

        $data['password'] = Hash::make($data['password']);
        $data['name'] = substr($data['email'], 0, strrpos($data['email'], '@'));
        $user = User::create($data);
        $user->sendEmailVerificationNotification();
        return response('{"status":1,"msg":"Регистрация прошла успешно"}');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $user_id = DB::table("oauth_access_tokens")->where("id", $id)->first();
        if (empty($user_id)) {
            return response(["status" => -1]);
        }

        $user = User::where("id", $user_id->user_id)->first();
        return response(["status" => 1, "user" => $user]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        if (empty($user))
            return response(['status' => -1]);
        if (!empty($request->location)) {

            $user->location = $request->location;
        }
        if (!empty($request->name)) {
            $user->name = $request->name;
        }
        if (!empty($request->tel)) {
            $user->tel = $request->tel;
        }
        if (!empty($request->oldPassword)) {
            if (!Hash::check($request->oldPassword, $user->password)) {
                return response(["status" => -1]);
            }
            $validator = Validator::make($request->all(), [
                'newPassword' => 'required|string|min:8',

            ]);
            if ($validator->fails()) {
                return response(["status" => -1, "msg" => $validator->errors()]);
            }
            $user->password = Hash::make($request->newPassword);
        }

        $user->save();
        return response(["status" => 1, "user" => $user]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       return response(["status"=> User::destroy($id)]);
    }
}
