app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Meetup = $resource('/api/meetups');

  $scope.meetups = [
    { name: "Mean SF Developers"},
    { name: "Mean London Developers"}
  ]

  $scope.createMeetup = function() {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save();
  }

}]);