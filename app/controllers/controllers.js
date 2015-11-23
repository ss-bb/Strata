
app.controller('SpeakersController', function ($scope, speakersService) {

    init();

    function init() {
        $scope.speakers = speakersService.getSpeakers();
    }

    $scope.insertSpeaker = function () {
        var firstName = $scope.newSpeaker.firstName;
        var lastName = $scope.newSpeaker.lastName;
        var pres = $scope.newSpeaker.pres;
        speakersService.insertSpeaker(firstName, lastName, pres);
        $scope.newSpeaker.firstName = '';
        $scope.newSpeaker.lastName = '';
        $scope.newSpeaker.pres = '';
    };

    $scope.deleteSpeaker = function (id) {
        speakersService.deleteSpeaker(id);
    };
});


app.controller('SpeakerStagesController', function ($scope, $routeParams, speakersService) {
    $scope.speaker = {};
    $scope.stagesTotal = 0.00;


    init();

    function init() {     
        var speakerID = ($routeParams.speakerID) ? parseInt($routeParams.speakerID) : 0;
        if (speakerID > 0) {
            $scope.speaker = speakersService.getSpeaker(speakerID);
        }
    }

});


app.controller('StagesController', function ($scope, speakersService) {
    $scope.speakers = [];
    
    init();

    function init() {
        $scope.speakers = speakersService.getSpeakers();
    }
});

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

//This controller is a child controller that will inherit functionality from a parent
app.controller('StageChildController', function ($scope) {
    $scope.stageby = 'speak';
    $scope.reverse = false;
    $scope.stagesTotal = 0.00;

    init();

    function init() {
    }

    $scope.setStage = function (stageby) {
        if (stageby === $scope.stageby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.stageby = stageby;
    };

});
