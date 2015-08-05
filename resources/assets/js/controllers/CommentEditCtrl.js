AppControllers.controller('CommentEditCtrl', function($scope, $http, $location, $routeParams, CommentService, ErrorsService)
{    
    
    /*Querying comment data*/
    var loadComment = function(){
        
        $scope.notExists = false;
        $scope.contentReady = false;
        
        CommentService.get({id:$routeParams.id}, function(data){
            if(data.id)
            {
                $scope.comment = $scope.commentData = data;
                $scope.contentReady = true;
            }
            else
            {
                $scope.notExists = true;
                $scope.contentReady = true;
            } 
            $scope.contentReady = true; 
        });
    };
    
    /* Form options */
    $scope.submitButton = 'Update Comment';
    $scope.updateComment = function (){
        
        CommentService.update({id: $scope.comment.id}, $scope.comment, loadComment, function (responce){ 
            $scope.errors = ErrorsService.handleValidationErrors(responce);
        });
        
    };
    
    loadComment();
});