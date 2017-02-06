import {Component, OnInit, ViewContainerRef, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ToastsManager} from "ng2-toastr";


@Component({
  moduleId:module.id,
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],

})
export class VerifyComponent implements OnInit
{
  private query:any;
  private verify:any;


  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {}

  queryUploaded($event):void
  {
    this.query = $event.file.name;
  }

  verifyUploaded($event):void
  {
    this.verify = $event.file.name;
  }

  detect():void
  {

    if(this.query && this.verify)
    {
      this.toastr.success('Yay!','Image Upload Successful');
    }
    else
    {
      this.toastr.error('Oops!','You forgot to select an image');
    }
  }

  verificationRemoved($event):void
  {
    this.query = null;
    this.toastr.info('Image removed');
  }

  queryRemoved($event):void{
    this.verify = null;
    this.toastr.info('Image removed');
  }
}
