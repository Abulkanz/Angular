'use strict';
//module('blog' = <html ng-app='blog'
var blog = angular.module('blog', []);

var blog = angular.module('blog', ['ngRoute']);
blog.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when("/blog", {
                    templateUrl: "public/pages/yoanne.html",
                    controller: 'blogCtrl'
                })
                .when("/contak", {
                    templateUrl: "public/pages/contact.html",
                    controller: 'blogCtrl'
                })
                .when("/Sport", {
                    templateUrl: "public/pages/sport.html",
                    controller: 'blogCtrl'
                })
                .otherwise({
                    templateUrl: "public/pages/accueil.html",
                    controller: 'blogCtrl'
                })
    }]);