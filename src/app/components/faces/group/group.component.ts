import { Component, OnInit } from '@angular/core';
import {fileUpload} from "../../../services/file.upload.service";


@Component({
  moduleId:module.id,
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit
{
  private images:any;
  constructor(private uploader:fileUpload) { }

  ngOnInit() {}

  imageUploaded($event:any):void
  {
    this.uploader.test($event);
  }
}
