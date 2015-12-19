angular.module('parliament.controllers', [])

.controller('MembersCtrl', function($scope, $http, Members) {
  $http.get('http://localhost:8000/members/').then(function(response){
    $scope.members = response.data;   
  });
  //$scope.members = Members.all();   
})

.controller('MemberDetailCtrl', function($scope, $stateParams, $http, Members) {
  $http.get('http://localhost:8000/members/'+$stateParams.memberId).then(function(response){
    $scope.member = response.data;   
  });
  //$scope.member = Members.get($stateParams.memberId);   
})

.controller('AboutCtrl', function($scope) {
  $scope.about = "Parliament app provides the list of members of parliament and their information.";
  $scope.developer = "Sudeep Kodavati";
  $scope.email = "sudeepkodavati@gmail.com";
  $scope.website = "www.sudeepkodavati.com";

})


