AppControllers.controller('CommentListCtrl', function($scope, $http, $location, Comment){
    $scope.loading = true;
    $scope.commentData = {};
    
    var refreshList = function(){
        $scope.comments = Comment.query();
        $scope.loading = false;
    };
    
    $scope.submitComment = function()
    {
        $scope.loading = true;
        Comment.save({},$scope.commentData, refreshList);
    };
    
    $scope.deleteComment = function(id)
    {
        $scope.loading = true;
        Comment.delete({id:id}, refreshList);
    };
    
    refreshList();
});