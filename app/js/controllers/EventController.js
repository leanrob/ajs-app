/**
 * Created by robert on 2016-08-03.
 */

'use strict';

/*
We can print anything to page that is within the $scope. Remove this comment after this commit.
 */

eventsApp.controller('EventController', function EventController($scope) {

    $scope.event = {
        name: 'Robert Byrne',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: '251 Bay Street',
            city: 'Toronto',
            province: 'Canada'
        },
        imageUrl: '/img/angularjs-logo.png'
    }

});