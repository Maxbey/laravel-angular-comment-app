AppDirectives.directive('commentComponent', function ($http, $window, CommentModel) {
    return {
        controller: CommentCtrl,
        templateUrl: 'components/comment.html',
    };
});