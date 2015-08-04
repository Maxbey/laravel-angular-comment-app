AppDirectives.directive('commentComponent', function ($http, $location, CommentService) {
    return {
        controller: CommentCtrl,
        templateUrl: 'components/comment.html',
    };
});