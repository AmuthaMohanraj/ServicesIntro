"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Engine = /** @class */ (function () {
    function Engine(hp, power, speed) {
        this.hp = hp;
        this.power = power;
        this.speed = speed;
    }
    Engine.prototype.fun = function () {
        console.log('inside engine');
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(e) {
        console.log('inside Car');
        console.log(this.e = e);
    }
    return Car;
}());
var engine = new Engine(100, 200, 100);
// engine.fun();
var car = new Car(engine);
car.e.fun();
