// class Animal {

//    private type: string;
//     readonly hasFur: boolean;

//   constructor( type:string, hasFur:boolean){
//       this.type = type
//       this.hasFur = hasFur
//   }
//   setType(newType: string){
//       this.type = newType
//   }
// }

// const animal = new Animal('Frog', false)

// // animal.hasFur = true
// console.log(animal)
// animal.setType('dog')

/// car class

class Car {
  public readonly make: string;
  public readonly model: string;
  public readonly year: number;

  private readonly doorlockCode: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.doorlockCode = this.generateDoorLockCode();
  }

  private generateDoorLockCode() {
    return Math.round(Math.random() * 1000);
  }

  public openAllDoors() {
    console.log(car.make, car.model, "opening doors with", this.doorlockCode);
  }
}
const car = new Car("BMW", "M3", 2016);
console.log(car.make, car.model, car.year);
car.openAllDoors();
