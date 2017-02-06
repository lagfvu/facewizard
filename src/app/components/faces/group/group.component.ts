import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {fileUpload} from "../../../services/file.upload.service";
import {ToastsManager} from "ng2-toastr";
import {ImageModel} from "../../../models/image.model";


@Component({
  moduleId:module.id,
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit
{
  private image:any;
  imageArray:any[] = [];
  currentImage:ImageModel;
  constructor(private uploader:fileUpload,public toastr: ToastsManager, vcr: ViewContainerRef)
  {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {}

  imageUploaded($event:any):void
  {
    this.imageArray.push(
      this.currentImage =
        {
          name:$event.file.name,
          url:$event.src
        });
  }

  group():void
  {
    if(this.imageArray)
    {
      this.uploader.group(this.imageArray);
      this.toastr.success('Yay!','Image Upload Successful');
    }
    else
    {
      this.toastr.error('Oops!','You forgot to select your images');
    }
  }
  imageRemoved($event):void{
    this.image = null;
    this.toastr.info('Image removed');
  }
}
