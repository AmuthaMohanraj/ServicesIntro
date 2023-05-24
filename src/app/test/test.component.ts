import { Component } from '@angular/core';
import { Person } from '../commonjson';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
   obj2=new Person();
}
