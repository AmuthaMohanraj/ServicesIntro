import { Component,OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-servicetest2',
  templateUrl: './servicetest2.component.html',
  styleUrls: ['./servicetest2.component.scss']
})
export class Servicetest2Component implements OnInit {

  reciveData:any;
  constructor(public e:ServicesService){
  }
  
  ngOnInit(): void {
    this.reciveData=this.e.getBirdsList();
  }

}
