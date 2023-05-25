import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


// Rules Of The Birds

export interface RulesOfBirds{
  species:string;
  scientificName:string;
  habitat:string;
  wingspan:string;
  lifespan:string
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url="http://localhost:4200/assets/birdList.json";

  Birds:RulesOfBirds[]=[
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
  ]

   getBirdsList()
   {
       return this.Birds
   }

     
   constructor(private http:HttpClient){
      
   }

   getBirdsListLikeServer(){
     return this.http.get(this.url)
   }




}
