import { Component } from '@angular/core';
import { Person } from './commonjson';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';


  // ArrayOfObj1:any=[
  //   {name:'mohanraj',age:21,message:'hai'},
  //   {name:'chandru',age:23,message:'welcome'},
  //   {name:'poongodi',age:25,message:'hello'},
  //   {name:'komathi',age:19,message:'hai buddy'}
  // ];

  obj1=new Person();
}
