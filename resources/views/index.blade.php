<!doctype html>
<html lang="en" ng-app="commentApp">
<head>
   <base href="/">
    <meta charset="UTF-8">
    <title>Laravel and Angular Comment System</title>
    <script src="vendor/jquery/dist/jquery.min.js"></script>
    <script src="vendor/angular/angular.min.js"></script>
    <script src="vendor/angular-resource/angular-resource.min.js"></script>
    <script src="vendor/angular-route/angular-route.min.js"></script>
    <script src="vendor/angular-animate/angular-animate.min.js"></script>
    <script src="vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="vendor/angular-loading-bar/build/loading-bar.min.js"></script>
    <script src="js/all.js"></script>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="vendor/angular-loading-bar/build/loading-bar.min.css">
    
    <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.min.css">
</head>


<body class="container">
    <div class="col-md-8 col-md-offset-2">
    <div class="page-header">
        <h2><a href="/">Laravel and Angular Single Page Application</a></h2>
        <h4>Commenting System</h4>
   </div>

    <div ng-view class="view-container"></div>
</div>
</body> 
</html>