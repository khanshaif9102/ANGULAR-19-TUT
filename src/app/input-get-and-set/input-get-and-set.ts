import { Component } from '@angular/core';

@Component({
  selector: 'app-input-get-and-set',
  imports: [],
  templateUrl: './input-get-and-set.html',
  styleUrl: './input-get-and-set.css',
})
export class InputGetAndSet {

  name = ""
  displayName = "";
  email = "";

  getName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
    console.log(this.name)

  }

  showName() {
    this.displayName = this.name;
  }
  setName() {
    this.name = "John";
  }

  getEmail(email: string) {
    this.email = email;
  }
  setEmail() {
    this.email = "shaif@live.com";
  }
}
