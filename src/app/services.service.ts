import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  ArrayOfObj1:any;
  constructor() {
  
   }

   getBirdsList()
   {
    return[
        {
          species: "Eagle",
          scientificName: "Aquila chrysaetos",
          habitat: "Mountains and forests",
          wingspan: "6 to 7.5 feet",
          lifespan: "20 to 30 years",
        },
        {
          species: "Owl",
          scientificName: "Strigiformes",
          habitat: "Various habitats",
          wingspan: "1 to 6.6 feet",
          lifespan: "5 to 25 years",
        },
        {
          species: "Hummingbird",
          scientificName: "Trochilidae",
          habitat: "Tropical and subtropical regions",
          wingspan: "3 to 4 inches",
          lifespan: "3 to 5 years",
        },
        {
          species: "Peacock",
          scientificName: "Pavo cristatus",
          habitat: "Forests and grasslands",
          wingspan: "4.9 to 6 feet",
          lifespan: "15 to 20 years",
        },
        {
          species: "Penguin",
          scientificName: "Spheniscidae",
          habitat: "Antarctica and surrounding regions",
          wingspan: "20 to 28 inches",
          lifespan: "15 to 20 years",
        }
      ];
      
   }
}
