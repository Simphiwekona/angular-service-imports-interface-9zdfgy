import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class TransportationService {
  // this is where we will recreate our array of Car types
  bmw: Car = { make: 'BMW', model: 'M5 F90 cs', miles: 93456 };
  benz: Car = { make: 'Mercedes Benz', model: 'E63', miles: 43011 };
  dodge: Car = { make: 'Dodge', model: 'chellenger', miles: 30021 };

  cars: Car[] = [this.bmw, this.benz, this.dodge];

  constructor() {}
  //Where we call the function
  getCars() {
    return this.cars;
  }
  // this is where we will write methods to export our Car array
}
