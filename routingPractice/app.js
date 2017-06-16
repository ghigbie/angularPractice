/* global angular */

(function(){
    let app = angular.module('customersApp', ['ngRoutes']);
    
    app.cponfig(function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'views/customer.html'
            });
            
    })
}());