var CommentCtrl = function($scope, $http, $location, CommentService)
{
    /*Q-1
        Can access to the resource to be in the directive ?
    */
    
    $scope.deleteComment = function(id)
    {
        CommentService.delete({id:id}, function(){
        /*Q-2
            How to make redirect through the $location service?
        */
            window.location = "/";
        });
    };
    
};