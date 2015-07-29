AppServices.factory('Comment', function ($resource){
    return $resource('/api/comments/', {});
});