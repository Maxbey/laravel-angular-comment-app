AppControllers.controller('CommentEditCtrl', function($scope, $http, $location, $routeParams, CommentModel)
{
    /*Querying comment data*/
    var loadComment = function(){
        $scope.contentReady = false;
        CommentModel.get({id:$routeParams.id}, function(data){ 
            $scope.comment = $scope.commentData = data; 
            $scope.contentReady = true; 
        });
    };
    
    /* Form options */
    $scope.submitButton = 'Update Comment';
    $scope.updateComment = function (){
        CommentModel.update({id: $scope.comment.id}, $scope.comment, loadComment);
    };
    
    loadComment();
});