var ourApp = angular.module('duopoly',['angular-meteor']);

ourApp.run(function($rootScope) {
    $rootScope.appName = "Duopoly"; 
});

ourApp.controller('landing', function($scope) {

});

