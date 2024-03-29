<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Message extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function entity(){
        return $this->belongsTo(Entity::class);
    }
}
