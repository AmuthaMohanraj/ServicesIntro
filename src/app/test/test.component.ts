import { Component } from '@angular/core';
import { Person } from '../commonjson';


interface IList{
  name:string,
  age:number,
  message:string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{
   obj2=new Person();

   searchQuery:string='';
   filterTableData:IList[]=[];

   searchFunction() {
    this.filterTableData = this.obj2.ArrayOfObj1.filter((element:any) => 
       element.name.toLowerCase().includes(this.searchQuery.toLowerCase())  
    )
    

    console.log(this.filterTableData);
    console.warn(this.searchQuery);
    
  }

}
