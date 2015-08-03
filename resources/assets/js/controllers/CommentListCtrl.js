AppControllers.controller('CommentListCtrl', function($scope, $http, $location, CommentModel)
{
    /*Hide content*/
    
    /*Querying comments data*/
    var refreshList = function(){
        $scope.contentReady = false;
        $scope.comments = CommentModel.query({}, function(){ $scope.contentReady = true; });
    };
    
    /*Object for new comment*/
    $scope.commentData = {};
    
    /* Form options */
    $scope.submitButton = 'Add Comment';
    $scope.submitComment = function()
    {
        CommentModel.save({},$scope.commentData, refreshList);
    };
    
    refreshList();
});