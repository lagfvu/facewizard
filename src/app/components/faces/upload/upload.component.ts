import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";


@Component({
  moduleId:module.id,
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit
{
  private image:any;
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef)
  {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {}

  imageUploaded($event:any):void
  {
    this.image = $event.file.name;
  }

  detect():void
  {
    if(this.image)
    {
      this.toastr.success('Yay!','Image Upload Successful');
      console.log(this.image);
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
