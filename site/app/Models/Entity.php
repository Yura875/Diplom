<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    use HasFactory;
    protected $table='entitys';
    public function image(){
        return $this->hasMany(Image::class,'post_id');
    }
}
