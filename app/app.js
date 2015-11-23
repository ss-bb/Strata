var app = angular.module('speakersApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/speakers',
            {
                controller: 'SpeakersController',
                templateUrl: 'app/partials/speakers.html'
            })
        .when('/speakerstages/:speakerID',
            {
                controller: 'SpeakerStagesController',
                templateUrl: 'app/partials/speakerStages.html'
            })
        .when('/stages',
            {
                controller: 'StagesController',
                templateUrl: 'app/partials/stages.html'
            })
        .otherwise({ redirectTo: '/speakers' });
});




