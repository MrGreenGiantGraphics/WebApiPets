namespace PetApp.Controllers {

    export class PetsController {

        // public property named pets
        public pets;

        constructor($http) {
            //this.pets = [
            //    { species: 'dog', name: 'Havoc' },
            //    { species: 'cat', name: 'Stanley' }
            //];
            $http.get('/api/pets')
                .then((response) => {
                    this.pets = response.data;
                });
        }
    }
}