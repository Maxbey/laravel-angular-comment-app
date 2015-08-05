AppServices.factory('ErrorsService', function(HelpersService) 
{   
    function handleValidationErrors(responce){
        if(responce.status == 422)
        {  
            return HelpersService.fetchErrors(responce);
        }
    }
    
    return {
        handleValidationErrors: handleValidationErrors
    };
});