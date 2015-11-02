angular.module('app.controllers', [])

.controller('ionicNewsCtrl', function($scope, $http) {
    $scope.news = [];
    $http.get('http://exemploapi.lithium.net.br/exemploapi/wp-json/posts').then(function (resp) {
        $scope.news = resp.data;
    },
    function (err) {
        console.error('Erro', err);
    })
})

.controller('noticiaCtrl', function($scope, $stateParams, $http) {
    $scope.noticia = [];
    $http.get('http://exemploapi.lithium.net.br/exemploapi/wp-json/posts/' + $stateParams.newsId)
    .then(function (resp) {
        $scope.noticia = resp.data;
    },
    function (err) {
        console.error('Erro', err);
    })
})

.controller('noticia1Ctrl', function($scope) {

})

.controller('noticia2Ctrl', function($scope) {

})

.controller('noticia3Ctrl', function($scope) {

})
