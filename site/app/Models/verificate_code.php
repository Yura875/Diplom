<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class verificate_code extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'code'
    ];
}
