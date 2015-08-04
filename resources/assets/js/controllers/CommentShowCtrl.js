AppControllers.controller('CommentShowCtrl', function($scope, $http, $location, $routeParams, CommentService)
{
    /*Q-5
        This is the controller for the single page comment.
        If the comment with given id does not exist in the database,
        what the responce should return the server ?
        Any status code ? 
        Or just the some value in the json ?
    */
    
    /*Querying comment data*/
    var loadComment = function(){
        $scope.contentReady = false;
        $scope.comment = CommentService.get({id:$routeParams.id}, function(){ $scope.contentReady = true; },
        function(){
            /*Q-6
                If the record does not already exist, should I get in the error callback ?
            */
        });
    };
    
    loadComment();
});