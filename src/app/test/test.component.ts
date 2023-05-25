import { Component } from '@angular/core';
import { Person } from '../commonjson';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
   obj2=new Person();

   searchQuery:string='';
   filterTableData:object[]=[];


   searchFunction(){
     this.filterTableData=this.obj2.ArrayOfObj1.filter((e:any)=>{
        e.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        console.log(e.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
     })
   }

}
