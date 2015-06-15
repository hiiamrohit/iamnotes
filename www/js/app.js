angular.module('iamnotes', ['ionic', 'iamnotes.controllers'])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider

 .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
     // render on add note page
    .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
     $urlRouterProvider.otherwise('/tab/home');
    // render on settings page
   
}) 

