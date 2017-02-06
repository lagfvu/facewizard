import { Component, OnInit } from '@angular/core';
import {Detection_features} from "../../../models/detection-features.model";

@Component({
  moduleId:module.id,
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit
{
  private features:Detection_features;
  private image:any;
  constructor() {}

  ngOnInit()
  {
    this.features = {
      age:false,
      gender:false,
      smile:false,
      head_pose:false,
      facial_hair:false,
      glassed:false

    }
  }
  imageUploaded($event:any):void
  {
    this.image = $event.file;
  }

  detect(model:Detection_features):void
  {
    console.log(model,this.image);

  }

}
