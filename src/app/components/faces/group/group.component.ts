import { Component, OnInit } from '@angular/core';


@Component({
  moduleId:module.id,
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit
{
  private image:any;
  constructor() { }

  ngOnInit() {}
}
