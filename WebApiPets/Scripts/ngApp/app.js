var PetApp;
(function (PetApp) {
    angular.module('PetApp', ['ngRoute'])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngViews/home.html',
            controller: PetApp.Controllers.PetsController,
            controllerAs: 'home'
        });
    });
})(PetApp || (PetApp = {}));
