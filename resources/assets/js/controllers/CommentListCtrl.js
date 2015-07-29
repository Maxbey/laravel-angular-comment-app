AppControllers.controller('CommentListCtrl', function($scope, $http, $location, Comment){
    $scope.comments = Comment.query();
});