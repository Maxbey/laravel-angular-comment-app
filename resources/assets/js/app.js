var App = angular.module('commentApp', [
    'ngRoute',
    'commentControllers',
    'commentFilters',
    'commentServices'
], function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

var AppControllers = angular.module('commentControllers', []),
    AppFilters = angular.module('commentFilters', []),
    AppServices = angular.module('commentServices', ['ngResource']);

App.config([
    '$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $routeProvide.when('/', {
            templateUrl: 'views/index.html',
            controller: 'CommentListCtrl'
        })
        .when('/comments/:id', {
            templateUrl: 'views/comment.html',
            controller: 'CommentShowCtrl'
        })
        .when('/comments/:id/edit', {
            templateUrl: 'views/comment_edit.html',
            controller: 'CommentEditCtrl'
        })
        .otherwise({
            templateUrl: 'views/wrong.html'
        });
    }
]);