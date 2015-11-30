var PetApp;
(function (PetApp) {
    var Controllers;
    (function (Controllers) {
        var PetsController = (function () {
            function PetsController($http) {
                var _this = this;
                //this.pets = [
                //    { species: 'dog', name: 'Havoc' },
                //    { species: 'cat', name: 'Stanley' }
                //];
                $http.get('/api/pets')
                    .then(function (response) {
                    _this.pets = response.data;
                });
            }
            return PetsController;
        })();
        Controllers.PetsController = PetsController;
    })(Controllers = PetApp.Controllers || (PetApp.Controllers = {}));
})(PetApp || (PetApp = {}));
