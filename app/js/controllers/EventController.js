/**
 * Created by robert on 2016-08-03.
 */

'use strict';

/*
We can print anything to page that is within the $scope. Remove this comment after this commit.
 */

eventsApp.controller('EventController', function EventController($scope) {


    $scope.buttonDisabled = true;

    $scope.event = {
        name: 'Robert Byrne',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: '251 Bay Street',
            city: 'Toronto',
            province: 'Canada'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Big event',
                creatorName: 'John Doe',
                duration: '1 hr',
                abstract: 'This is the first event',
                upvote: 0
            },
            {
                name: 'Bigger event',
                creatorName: 'Jim Boe',
                duration: '4 hr',
                abstract: 'Come in for a second one, a long one',
                upvote: 0
            },
            {
                name: 'Biggest event',
                creatorName: 'Jane Doe',
                duration: '8 hr',
                abstract: 'strap in for an all day event',
                upvote: 0
            }
        ]
    }

    $scope.upVoteSession = function(session) {
        session.upvote++;
    };

    $scope.downVoteSession = function(session) {
        session.upvote--;
    };


});