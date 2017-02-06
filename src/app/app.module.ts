import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from "./routers/app.routes";
import {Auth} from "./services/auth.service";
import {DetectComponent} from "./components/faces/detect/detect.component";
import {UploadComponent} from "./components/faces/upload/upload.component";
import {GroupComponent} from "./components/faces/group/group.component";
import {VerifyComponent} from "./components/faces/verify/verify.component";
import {FacesComponent} from "./components/faces/faces.component";
import {HomeComponent} from "./components/home/home.component";
import {ImageUploadModule} from "angular2-image-upload";
import {DemoAuth} from "./services/demo.auth.service";
import {fileUpload} from "./services/file.upload.service";
import {ToastModule} from "ng2-toastr";
import { SimilarityComponent } from './components/faces/similarity/similarity.component';
import { TrainComponent } from './components/faces/train/train.component';
import { IdentifyComponent } from './components/faces/identify/identify.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,FacesComponent,VerifyComponent,GroupComponent,UploadComponent,DetectComponent, SimilarityComponent, TrainComponent, IdentifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ImageUploadModule.forRoot(),

    ToastModule.forRoot()
  ],
  providers: [appRoutingProviders,DemoAuth,fileUpload],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
