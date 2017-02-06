import { Component, OnInit } from '@angular/core';


@Component({
  moduleId:module.id,
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit
{
  private query:any;
  private verify:any;


  constructor() { }

  ngOnInit() {}

  queryUploaded($event):void
  {
    console.log('query file is '+$event.file.name);
  }

  verifyUploaded($event):void
  {
    console.log('verify file is '+$event.file.name);
  }
}
