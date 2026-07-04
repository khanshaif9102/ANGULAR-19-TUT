import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;

  // increaseCount() {
  //   this.count++;
  // }

  // decreaseCount() {
  //   if (this.count != 0)
  //     this.count--;
  //   else
  //     console.log("Cannot Decrease to Negative")
  // }

  // resetCount() {
  //   this.count = 0;
  // }

  handleCounter(action: string) {
    if (action == "increament") {
      this.count++;
    }
    else if (action == "decreament") {
      if (this.count == 0) {
        console.log("Cannot Decrease to negative");
      }
      else {
        this.count--;
      }
    }
    else if (action == "reset") {
      this.count = 0;
    }
  }

}
