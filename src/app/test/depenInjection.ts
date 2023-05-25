export{}


// class Engine{
//     hp:number;
//     power:number;
//     constructor(hp:number,power:number){
//         this.hp=hp;
//         this.power=power;
//         console.log(this.hp,this.power);   
//     }
//     fun(){
//     console.log('inside Engine');

//     }
// }

// class Car{
//     e:Engine=new Engine(200,120)
//     constructor(){
//         console.log('inside Car');       
//     }
// }

// let obj=new Car();
//     obj.e.fun();



class Engine{
    hp:number;
    power:number;
    speed:number;
    constructor(hp:number,power:number,speed:number){
        this.hp=hp;
        this.power=power;
        this.speed=speed;
    }
    fun(){
        console.log('inside engine');
    }
}

class Car{
    e:Engine;
    constructor(e:Engine){
        console.log('inside Car');
       console.log(this.e=e);     
    }
}
let engine=new Engine(100,200,100);
// engine.fun();
let car=new Car(engine)
car.e.fun()