AppControllers.controller('CommentEditCtrl', function($scope, $http, $location, $routeParams, CommentService)
{
    /*Q-3
        To hide the content until the page is fully loaded
        I use contentReady variable and the Directive ng-show, 
        it is repeated in all controllers, 
        is there a better way ?
    */
    
    
    
    /*Querying comment data*/
    var loadComment = function(){
        
        $scope.contentReady = false;
        CommentService.get({id:$routeParams.id}, function(data){ 
            $scope.comment = $scope.commentData = data; 
            $scope.contentReady = true; 
        });
    };
    
    /* Form options */
    $scope.submitButton = 'Update Comment';
    $scope.updateComment = function (){
        CommentService.update({id: $scope.comment.id}, $scope.comment, loadComment);
    };
    
    loadComment();
});