import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {fileUpload} from "../../../services/file.upload.service";
import {ToastsManager} from "ng2-toastr";


@Component({
  moduleId:module.id,
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit
{
  private image:any;
  constructor(private uploader:fileUpload,public toastr: ToastsManager, vcr: ViewContainerRef)
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
