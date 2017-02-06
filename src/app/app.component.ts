import { Component } from '@angular/core';
import {DemoAuth} from "./services/demo.auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private auth:DemoAuth)
  {
  }



}
