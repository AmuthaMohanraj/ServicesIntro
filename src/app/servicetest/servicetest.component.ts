import { Component,OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-servicetest',
  templateUrl: './servicetest.component.html',
  styleUrls: ['./servicetest.component.scss']
})
export class ServicetestComponent implements OnInit {


  reciveData:any;
  
  constructor(public s:ServicesService){
  }
  
 ngOnInit(){
    this.reciveData=this.s.getBirdsList();
 }

}
