var CommentCtrl = function($scope, $http, CommentModel)
{
    
    $scope.deleteComment = function(id)
    {
        CommentModel.delete({id:id}, function(){
            window.location = "/";
        });
    };
    
};