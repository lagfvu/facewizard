import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {fileUpload} from "../../../services/file.upload.service";

@Component({
  moduleId:module.id,
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit
{
  private image:any;
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,private uploader:fileUpload)
  {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {}

  imageUploaded($event:any):void
  {
    this.image = $event.src;
  }

  detect():any
  {
    if(this.image)
    {
      this.uploader.upload(this.image);
      this.toastr.success('Yay!','Image Upload Successful');
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
