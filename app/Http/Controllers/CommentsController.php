<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Comment;

class CommentsController extends Controller
{
    
    public function __construct(){
        $this->middleware('ajax');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $comments = Comment::latest()->get();

        return $comments;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     * @return Response
     */
    public function store(CommentRequest $request)
    {
        Comment::create($request->all());

        return response()->json([
            'success' => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        $comment = Comment::findOrFail($id);

        return $comment;

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param  int $id
     * @return Response
     */
    public function update(CommentRequest $request, $id)
    {
        $comment = Comment::findOrFail($id);
        $comment->update($request->all());

        return response()->json([
            'success' => true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        Comment::destroy($id);

        return response()->json([
            'success' => true
        ]);
    }
}
