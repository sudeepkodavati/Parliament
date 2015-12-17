angular.module('parliament.controllers', [])

.controller('MembersCtrl', function($scope, $http) {
  $http.get('http://localhost:8000/members/').then(function(response){
    $scope.members = response.data;   
  });
})

.controller('MemberDetailCtrl', function($scope, $stateParams, $http) {
  $http.get('http://localhost:8000/members/'+$stateParams.memberId).then(function(response){
    $scope.member = response.data;   
  });
})

.controller('AboutCtrl', function($scope) {
  $scope.about = "This app provides list of members of Lok Shaba and Raja Shaba...";
  $scope.developer = "Sudeep Kodavati <sudeepkodavati@gmail.com>";

})


