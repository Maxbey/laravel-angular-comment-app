AppControllers.controller('CommentShowCtrl', function($scope, $http, $location, $routeParams, CommentModel)
{
    /*Querying comment data*/
    var loadComment = function(){
        $scope.contentReady = false;
        $scope.comment = CommentModel.get({id:$routeParams.id}, function(){ $scope.contentReady = true; });
    };
    
    loadComment();
});