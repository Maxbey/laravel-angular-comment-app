AppControllers.controller('CommentListCtrl', function($scope, $http, $location, CommentService)
{
    /*Q-4
        Whether to validate the json server response for the void in the controller,
        or check directly in the template using ng-show or ng-if directives ?
    */
    
    /*Querying comments data*/
    var refreshList = function(){
        $scope.contentReady = false;
        $scope.comments = CommentService.query({}, function(){ $scope.contentReady = true; });
    };
    
    /*Object for new comment*/
    $scope.commentData = {};
    
    /* Form options */
    $scope.submitButton = 'Add Comment';
    $scope.submitComment = function()
    {
        CommentService.save({},$scope.commentData, refreshList);
    };
    
    refreshList();
});