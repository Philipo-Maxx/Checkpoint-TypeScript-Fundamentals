interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  constructor(public make: string, public model: string, public year: number) {}

  start(): void {
    console.log("Car engine started");
  }
}

let car1 = new Car("Toyata", "Yaris", 2010);

car1.start();
