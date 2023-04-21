import { Component } from '@angular/core';
// here is where we import the car interface
import { TransportationService } from './transportation.service';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[];
  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  saySomething() {
    alert("I'm Learning Angular ✊");
  }

  counter = 0;
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
  phrase = "it's moving now";
  update() {
    this.phrase += '..and moving';
  }
}
