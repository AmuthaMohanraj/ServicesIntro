import { Component } from '@angular/core';
import { Person } from '../commonjson';

@Component({
  selector: 'app-testtwo',
  templateUrl: './testtwo.component.html',
  styleUrls: ['./testtwo.component.scss']
})
export class TesttwoComponent {
   obj3=new Person();
}
