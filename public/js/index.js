var app = angular.module('buss-app',['ngRoute','ngAnimate']);

// 设置app服务
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'tpl/main.html',
        controller:'mainCtrl'
    })
    .when('/new',{
        templateUrl:'tpl/edit.html',
        controller:'editCtrl'
    })
    .when('/detail/:id',{
        templateUrl:'tpl/detail.html',
        controller:'detailCtrl'
    })
    .when('/edit/:id',{
        templateUrl:'tpl/edit.html',
        controller:'editCtrl'
    })
    .otherwise({
        redirectTo:'/'
    })
}])

