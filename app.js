var App = angular.module('App', []);

App.controller('FinanceCtrl', function($scope, $http) {
  $http.get('testimonials.json')
       .then(function(res){
          $scope.testimonials = res.data;
        });
});
