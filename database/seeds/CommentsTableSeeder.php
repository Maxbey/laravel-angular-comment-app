<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Comment;


class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->delete();

        Comment::create([
            'author' => 'author one',
            'text' => 'Lorem ipsum comment'
        ]);

        Comment::create([
            'author' => 'author two',
            'text' => 'Another lorem comment'
        ]);

        Comment::create([
            'author' => 'author three',
            'text' => 'One more comment'
        ]);
    }
}
