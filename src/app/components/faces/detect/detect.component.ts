import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Detection_features} from "../../../models/detection-features.model";
import {ToastsManager} from "ng2-toastr";
import {fileUpload} from "../../../services/file.upload.service";

@Component({
  moduleId:module.id,
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit
{
  private formModel:Detection_features;
  private image:any;
  private state:boolean;
  private imgsrc:string;
  private dataModel:{}={};


  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,private uploader:fileUpload)
  {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit()
  {
    this.state = false;

    this.formModel = {
      age:false,
      gender:false,
      smile:false,
      head_pose:false,
      facial_hair:false,
      glassed:false,
      imgSrc:''
    }

  }
  imageUploaded($event:any):void
  {
    this.image = $event.file.name;
    this.imgsrc = $event.src;
  }

  detect(model:Detection_features):void
  {
    if(this.image)
    {
      model.imgSrc = this.imgsrc;


      this.uploader.detect(model);


      this.toastr.success('Yay!','Image Upload Successful');
      this.state = true;
    }
    else
    {
      this.toastr.error('Oops!','You forgot to select an image');
    }
  }

  imageRemoved($event):void{
    this.image = null;
    this.toastr.info('Image removed');
  }

}
