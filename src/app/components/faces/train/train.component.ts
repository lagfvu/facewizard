import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {TrainingModel} from "../../../models/train.model";
import {ImageModel} from "../../../models/image.model";
import {ToastsManager} from "ng2-toastr";
import {fileUpload} from "../../../services/file.upload.service";

@Component({
  selector: 'app-train',
  templateUrl: 'train.component.html',
  styleUrls: ['train.component.css']
})

export class TrainComponent implements OnInit {

  private train:TrainingModel;
  imageArray:any[] = [];
  currentImage:ImageModel;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,private uploader:fileUpload)
  {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit()
  {
    this.train = {
      groupName:'',
      groupDesc:'',
      personName:''
    }
  }

  imageUploaded($event):void
  {
    this.imageArray.push(
      this.currentImage =
        {
        name:$event.file.name,
        url:$event.src
      })
  }

  imageRemoved($event):void{
    this.currentImage = null;
    this.toastr.info('Image removed');
  }

  trainer(model:TrainingModel):void
  {
    console.log(model);
  }

}
