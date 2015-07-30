<?php

Route::get('/', function(){
    return view('index');
});

Route::group(['prefix' => 'api'], function() {

    Route::resource('comments', 'CommentsController',

        ['only' => ['index', 'store', 'show', 'update', 'destroy']]);
});