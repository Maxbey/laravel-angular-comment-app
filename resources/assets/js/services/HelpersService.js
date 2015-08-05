AppServices.factory('HelpersService', function() 
{
    function fetchErrors(responce){
        var errors = [];
        for( var error in responce.data){
            errors.push(responce.data[error][0]);
        }
        
        return errors;
    } 
    
    

    return {
        fetchErrors: fetchErrors
    };
});