import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  handleEvent(event: Event) {
    console.log("Function Called", event.type);
    console.log("Function Called", event.target);
    // console.log("Value : ", event?.target?.Value ?? "");
    console.log("value", (event.target as HTMLInputElement).value)
  }
}
