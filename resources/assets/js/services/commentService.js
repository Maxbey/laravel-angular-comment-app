AppServices.factory('Comment', function ($resource){
    return $resource('/api/comments/:id', {
        id: ''
    }, {
        update: {method: 'PATCH'}
    });
});