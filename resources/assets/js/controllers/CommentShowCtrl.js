AppControllers.controller('CommentShowCtrl', function($scope, $http, $location, $routeParams, Comment){
    $scope.loading = true;
    
    $scope.comment = Comment.get({id:$routeParams.id}, function(){
        $scope.loading = false;
    }, function(){
        console.log('Loading failed');
    });
});