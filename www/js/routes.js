angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('ionicNews', {
      url: '/page1',
      templateUrl: 'templates/ionicNews.html',
      controller: 'ionicNewsCtrl'
    })





    .state('noticia1', {
      url: '/noticia1',
      templateUrl: 'templates/noticia1.html',
      controller: 'noticia1Ctrl'
    })





    .state('noticia2', {
      url: '/noticia2',
      templateUrl: 'templates/noticia2.html',
      controller: 'noticia2Ctrl'
    })



    .state('noticia', {
      url: '/noticia/:newsId',
      templateUrl: 'templates/noticia.html',
      controller: 'noticiaCtrl'
    })

    .state('noticia3', {
      url: '/noticia3',
      templateUrl: 'templates/noticia3.html',
      controller: 'noticia3Ctrl'
    });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});