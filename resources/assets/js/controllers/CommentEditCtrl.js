AppControllers.controller('CommentEditCtrl', function($scope, $http, $location, $routeParams, Comment){
    $scope.loading = true;
    var loadComment = function (){
            $scope.comment = Comment.get({id:$routeParams.id}, function(){
            $scope.loading = false;
        });
    };

    $scope.updateComment = function (){
       Comment.update({id: $scope.comment.id}, $scope.comment, loadComment);
    };
    
    loadComment();
});