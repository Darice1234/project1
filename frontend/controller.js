app.controller('RegisterController', function($scope, $http) {
  $scope.user = {};

  $scope.register = function() {
    if ($scope.regForm.$valid) {
      $http.post('http://localhost:3000/register', $scope.user)
        .then(function(response) {
          $scope.successMessage = response.data.message;
          $scope.errorMessage = '';
          $scope.user = {}; // Reset form
          $scope.regForm.$setPristine();
          $scope.regForm.$setUntouched();
        }, function(error) {
          $scope.errorMessage = error.data.error;
          $scope.successMessage = '';
        });
    }
  };
});
