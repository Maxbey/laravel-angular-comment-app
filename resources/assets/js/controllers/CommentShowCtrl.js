AppControllers.controller('CommentShowCtrl', function($scope, $http, $location, $routeParams, CommentService)
{   
    /*Querying comment data*/
    var loadComment = function()
    {
        $scope.notExists = false;
        $scope.contentReady = false;
        CommentService.get({id:$routeParams.id}, function(data){
            if(data.id)
            {
                $scope.comment = data;
                $scope.contentReady = true;
            }
            else
            {
                $scope.notExists = true;
                $scope.contentReady = true;
            }
        });
    };
    
    loadComment();
});