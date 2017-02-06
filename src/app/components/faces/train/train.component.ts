import { Component, OnInit } from '@angular/core';
import {TrainingModel} from "../../../models/train.model";
import {ImageModel} from "../../../models/image.model";

@Component({
  selector: 'app-train',
  templateUrl: 'train.component.html',
  styleUrls: ['train.component.css']
})

export class TrainComponent implements OnInit {

  private train:TrainingModel;
  imageArray:any[] = [];
  currentImage:ImageModel;

  constructor() { }

  ngOnInit()
  {
    this.train = {
      groupName:'',
      groupDesc:'',
      personName:''
    }

    this.currentImage = {
      name:'',
      url:''
    }
  }

  imageUploaded($event):void
  {
    this.currentImage.name = $event.file.name;
    this.currentImage.url = $event.file.src;

    this.imageArray.push(
      this.currentImage =
        {
        name:$event.file.name,
        url:$event.src
      })
  }

  trainer(model:TrainingModel):void
  {
    console.log(model,this.imageArray);
  }

}
