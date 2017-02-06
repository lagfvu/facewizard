import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {fileUpload} from "../../../services/file.upload.service";

@Component({
  selector: 'app-identify',
  templateUrl: 'identify.component.html',
  styleUrls: ['identify.component.css']
})
export class IdentifyComponent implements OnInit {

  private image:any;
  private state:boolean;
  private imgsrc:string;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,private uploader:fileUpload)
  {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
    this.state = false;
  }

  imageUploaded($event:any):void
  {
    this.image = $event.file.name;
    this.imgsrc = $event.src;
  }

  identify():void
  {
    if(this.image)
    {
      this.uploader.identifty(this.imgsrc);
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
