AppServices.factory('CommentService', function ($resource){
    var all = function(){
        return this.query();
    };
    
    
    return $resource('/api/comments/:id', {
        id: ''
    }, {
        update: {method: 'PATCH'}
    });
});