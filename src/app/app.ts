import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from './signup/signup';
import { ProfileComponent } from "./profile/profile";
import { Counter } from './counter/counter';
import { Events } from "./events/events";
import { InputGetAndSet } from './input-get-and-set/input-get-and-set';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, ProfileComponent, Counter, Events, InputGetAndSet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ANGULAR-19-TUT');

  // OnclickEvent() {
  //   alert("Button is Clicked.");
  //   this.OtherFuncton();
  // }

  // OtherFuncton() {
  //   console.log("Other Function");
  // }




}
