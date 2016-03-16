// controls ChatForm
console.log("found ChatController");

var chatApp = angular.module('chatApp', []);

chatApp.controller ('ChatController', ['$scope', '$http', function ($scope, $http) {
  console.log("Here's the mail, it never fails!");

  $scope.chat = [
    'message'
  ];

  $scope.master = {};

  $scope.sendMessage = function (chat) {
    console.log("Gotcha")
    $scope.master = angular.copy(chat);
  }
}]);
