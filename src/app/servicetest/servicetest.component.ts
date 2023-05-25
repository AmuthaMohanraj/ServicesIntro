import { Component,OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {RulesOfBirds} from '../services.service'

@Component({
  selector: 'app-servicetest',
  templateUrl: './servicetest.component.html',
  styleUrls: ['./servicetest.component.scss']
})
export class ServicetestComponent implements OnInit {


  reciveData:RulesOfBirds[]=[];
  serverData:any;

  constructor(public s:ServicesService){

  }
    
  
 ngOnInit(){
  this.s.getBirdsListLikeServer().subscribe((data) =>{
    this.serverData = data;
    console.log(this.serverData);
  });}

}
