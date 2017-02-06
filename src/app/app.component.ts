import {Component, ViewContainerRef} from '@angular/core';
import {DemoAuth} from "./services/demo.auth.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private auth:DemoAuth,public toastr: ToastsManager, vRef: ViewContainerRef)
  {
    this.toastr.setRootViewContainerRef(vRef);
  }

}
