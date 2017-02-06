import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {fileUpload} from "../../../services/file.upload.service";

@Component({
  selector: 'app-similarity',
  templateUrl: 'similarity.component.html',
  styleUrls: ['similarity.component.css']
})
export class SimilarityComponent implements OnInit {
  private query:any;
  private verify:any;

  private imageArray:string[]=[];



  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,private uploader:fileUpload) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {}

  queryUploaded($event):void
  {
    this.query = $event.src;
  }

  verifyUploaded($event):void
  {
    this.verify = $event.src;
  }

  similarity():void
  {

    if(this.query && this.verify)
    {
      this.imageArray.push(this.query);
      this.imageArray.push(this.verify);

      this.uploader.similarity(this.imageArray);
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
