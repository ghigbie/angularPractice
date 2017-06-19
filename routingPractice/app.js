/* global angular */

(function(){
    let app = angular.module('customersApp', ['ngRoutes']);
    
    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'views/customer.html'
            })
            .otherwise( {redirectTo: '/'} );
            
    })
}());