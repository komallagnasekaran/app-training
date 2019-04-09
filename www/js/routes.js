angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('page2', {
    url: '/page2',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page3',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('2', {
    url: '/page8',
    templateUrl: 'templates/2.html',
    controller: '2Ctrl'
  })

  .state('3', {
    url: '/page9',
    templateUrl: 'templates/3.html',
    controller: '3Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('1', {
    url: '/page13',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('page14', {
    url: '/page14',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('12', {
    url: '/page16',
    templateUrl: 'templates/12.html',
    controller: '12Ctrl'
  })

  .state('22', {
    url: '/page17',
    templateUrl: 'templates/22.html',
    controller: '22Ctrl'
  })

  .state('32', {
    url: '/page11',
    templateUrl: 'templates/32.html',
    controller: '32Ctrl'
  })

  .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

$urlRouterProvider.otherwise('/')


});