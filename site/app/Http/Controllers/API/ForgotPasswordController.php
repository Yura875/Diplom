<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\verificate_code;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;


class ForgotPasswordController extends Controller
{
    public function forgot(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email'

        ]);
        if ($validator->fails()) {
            return response(["status" => -1, "msg" => $validator->errors()]);

        }
        $data = ["email" => $request->email];
        $user = User::where('email', $data['email'])->first();
        if (empty($user)) {
            return response(["status" => -1]);
        }
        try {
            $reset_code = random_int(100000, 1000000);
        } catch (\Exception $e) {
            return response(["status" => -1]);
        }
        $data2['user_id'] = $user->id;
        $data2['code'] = $reset_code;
        verificate_code::create($data2);
        Mail::send('emails.email', ['code' => $reset_code], function ($m) use ($user) {
            $m->from('diplomlaravel@gmail.com', 'OLX');

            $m->to($user->email, $user->name)->subject("Запрос на смену пароля");


        });
        return response(["status" => 1]);

    }


    public function reset(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required',
            'password' => 'required|string'
        ]);
        if ($validator->fails()) {
            return response(["status" => -1, "msg" => $validator->errors()]);
        }
        $data = $request->all();
        $codes = verificate_code::where("status", 0)->where("code", $data['code'])->first();
        if (empty($codes)) {
            return response(["status" => -1]);
        }
        $user = User::where('id', $codes->user_id)->first();
        if (empty($user)) {
            return response(["status" => -1]);
        }
        $user->password = Hash::make($data['password']);
        $user->save();
        $codes->status=1;
        $codes->save();
        return response(["status" => 1]);
    }
}
