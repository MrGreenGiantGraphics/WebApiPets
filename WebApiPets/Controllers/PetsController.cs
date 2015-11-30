using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiPets.Models;

namespace WebApiPets.Controllers {

    // URL: /api/pets
    public class PetsController : ApiController {

        // GET: /api/pets
        public List<Pet> Get() {
            var petList = new List<Pet>();

            var havoc = new Pet() {
                Name = "Havoc",
                Species = "Dog"
            };
            var stanley = new Pet() {
                Name = "Stanley",
                Species = "Cat"
            };

            petList.Add(havoc);
            petList.Add(stanley);

            return petList;
            /*
            [
                {
                    "name": "Havoc",
                    "species": "Dog"    
                },
                {
                    "name": "Stanley",
                    "species": "Cat"
                }
            ]
            */
        }
    }
}
