var App = angular.module('commentApp', [
    'ngRoute',
    'angular-loading-bar',
    'commentControllers',
    'commentFilters',
    'commentServices',
    'commentAnimations',
    'commentDirectives'
], function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

var AppControllers = angular.module('commentControllers', []),
    AppFilters = angular.module('commentFilters', []),
    AppServices = angular.module('commentServices', ['ngResource']);
    AppAnimations = angular.module('commentAnimations', ['ngAnimate']);

var AppDirectives = angular.module('commentDirectives', []);

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
            templateUrl: 'views/comment_show.html',
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