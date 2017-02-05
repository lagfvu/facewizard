import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit
{
  // private features:Detection_features;
  private image:any;
  constructor() {}

  ngOnInit()
  {
  }

  detect(model:any):void
  {
    console.log();
  }

}
