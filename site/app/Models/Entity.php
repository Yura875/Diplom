<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    use HasFactory;

    public function image()
    {
        return $this->hasMany(Image::class, 'post_id');
    }

    public function city()
    {
        return $this->belongsTo('App\Models\City');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
