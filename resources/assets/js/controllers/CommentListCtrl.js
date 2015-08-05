AppControllers.controller('CommentListCtrl', function($scope, $http, $location, CommentService, ErrorsService)
{   
    
    /*Querying comments data*/
    var refreshList = function(){
        $scope.contentReady = false;
        $scope.comments = CommentService.query({}, function(){ 
            $scope.contentReady = true; 
            $scope.errors = false;
        });
    };
    
    /*Object for new comment*/
    $scope.commentData = {};
    
    /* Form options */
    $scope.submitButton = 'Add Comment';
    $scope.submitComment = function()
    {
        CommentService.save({},$scope.commentData, refreshList, function (responce){ 
            $scope.errors = ErrorsService.handleValidationErrors(responce);
        });
    };
    
    refreshList();
});