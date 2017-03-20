'use strict';

var blog = angular.module('blog', ['ngRoute']);
blog.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when("/yo", {
                    title: "Yoanne",
                    templateUrl: "pages/yoanne.html",
                    controller: 'blogCtrl'
                })
                .when("/ajoutArt", {
                    title: "Ajouter un article",
                    templateUrl: "pages/ajoutArt.html",
                    controller: 'ajoutCtrl'
                })
                .when("/article/:id", {
                    title: "Article",
                    templateUrl: "pages/article.html",
                    controller: 'artCtrl'
                })
                .when("/Expériences", {
                    title: "Expériences",
                    templateUrl: "pages/experiences.html",
                    controller: 'expCtrl'
                })
                .when("/contak", {
                    title: "Contact",
                    templateUrl: "pages/contact.html",
                    controller: 'blogCtrl'
                })
                .when("/acc", {
                    title: "Portfolio - Accueil",
                    templateUrl: "pages/accueil.html",
                    controller: 'blogCtrl'
                })
                .otherwise({
                    title: "Accueil",
                    templateUrl: "pages/accueil.html",
                    controller: 'blogCtrl'
                })
    }]);

//blog.run(['$rootScope', function($rootScope){
//        $rootScope.$on('$routeChangeSuccess', function (event, current, previous){
//            $rootScope.title = current.$$route.title;
//        });
//}])