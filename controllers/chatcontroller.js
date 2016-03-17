/* 
  Controls ChatForm

  -- Setting up an Angular Form
  ---- Declare ng-app
  ---- Declare ng-controller
  ---- Go nuts.

*/
console.log("found ChatController");

var chatApp = angular.module('chatApp', []);
chatApp.controller ('ChatController', ['$scope', '$http', function ($scope, $http) {
  console.log("Here's the mail, it never fails!");

  $scope.chat = [
    'message'
  ];


  $scope.master = []

  $scope.sendMessage = function (chat) {
    console.log("Received : " + chat.message)
    $scope.master.push(chat.message);
  }
}]);

console.log('Finished with controller');

/*
    console.log('hey')
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });



*/