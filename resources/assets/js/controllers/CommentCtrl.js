var CommentCtrl = function($scope, $http, $location, CommentService)
{
    
    $scope.deleteComment = function(id)
    {
        CommentService.delete({id:id}, function(){
            window.location = "/";
        });
    };
    
};