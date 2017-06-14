var myApp = angular.module('petApp', []);

myApp.controller('PetController', ['$scope', function($scope) {
    $scope.pets = 'pets';
    
    $scope.iLikeCats = function() {
        $scope.pets = 'cats';
    };
    
    $scope.iLikeDogs = function() {
        $scope.pets = 'dogs';
    }
}]);