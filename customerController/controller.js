/* global app */
/* global angular */

// app.controller('CustomersController', function($scope){
//     $scope.sortBy = 'name'; //provides a default sort
//     $scope.reverse = 'false'; //provides a ascending default
                
//     $scope.customers = [
//         {name: 'John', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
//         {name: 'Mary', city: 'Englewood', joined: '2010-10-12', orderTotal: 400}, 
//         {name: 'Huck', city: 'Yuma', joined: '2013-09-09', orderTotal: 500}, 
//         {name: 'Jackie', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
//         {name: 'Monika', city: 'Englewood', joined: '2010-10-12', orderTotal: 200},
//         {name: 'Caleb', city: 'Neches', joined: '1995-08-02', orderTotal: 300}
//     ];
    
//     $scope.doSort = function(propName) {
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//     };
// });

//Option 1 -- vars are in the global scope
// app.controller('CustomersController', function ($scope){
//         $scope.sortBy = 'name';
//         $scope.reverse = false;
                
// //         $scope.customers = [
// //             {name: 'John', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
// //             {name: 'Mary', city: 'Englewood', joined: '2010-10-12', orderTotal: 400}, 
// //             {name: 'Huck', city: 'Yuma', joined: '2013-09-09', orderTotal: 500}, 
// //             {name: 'Jackie', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
// //             {name: 'Monika', city: 'Englewood', joined: '2010-10-12', orderTotal: 200},
// //             {name: 'Caleb', city: 'Neches', joined: '1995-08-02', orderTotal: 300}
// //          ];
// //         $scope.doSort = function(propName){
// //             $scope.sortBy = propName;
// //             $scope.reverse = !$scope.reverse;
// //     }
// // });

// //Option 2 -- vars are pulled out of the global scope
// (function() {
//     angular.module('customersApp')
//         .controller('CustomersController', function ($scope){
//             $scope.sortBy = 'name';
//             $scope.reverse = false;
                    
//             $scope.customers = [
//                 {name: 'John', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
//                 {name: 'Mary', city: 'Englewood', joined: '2010-10-12', orderTotal: 400}, 
//                 {name: 'Huck', city: 'Yuma', joined: '2013-09-09', orderTotal: 500}, 
//                 {name: 'Jackie', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
//                 {name: 'Monika', city: 'Englewood', joined: '2010-10-12', orderTotal: 200},
//                 {name: 'Caleb', city: 'Neches', joined: '1995-08-02', orderTotal: 300}
//              ];
//             $scope.doSort = function(propName){
//                 $scope.sortBy = propName;
//                 $scope.reverse = !$scope.reverse;
//         }
//     });
// }());

//Option 3 -- allows you to focus on the function

(function() {
    
    var CustomersController = function ($scope){
        $scope.sortBy = 'name';
            $scope.reverse = false;
                    
            $scope.customers = [
                {name: 'John', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
                {name: 'Mary', city: 'Englewood', joined: '2010-10-12', orderTotal: 400}, 
                {name: 'Huck', city: 'Yuma', joined: '2013-09-09', orderTotal: 500}, 
                {name: 'Jackie', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
                {name: 'Monika', city: 'Englewood', joined: '2010-10-12', orderTotal: 200},
                {name: 'Caleb', city: 'Neches', joined: '1995-08-02', orderTotal: 300}
             ];
            $scope.doSort = function(propName){
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
        };
    };
    
    CustomersController.$inject = ['$scope'] //prevents minification from messing up variable
    
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);

}());

