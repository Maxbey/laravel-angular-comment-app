<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * Table name
     * @var string
     */
    protected $table = 'comments';

    /**
     * Fillable fields
     * @var array
     */
    protected $fillable = [
        'author',
        'text',
    ];
}
