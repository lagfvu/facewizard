import {Injectable} from "@angular/core";
import {Http,Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class fileUpload
{
  private serverUrl= "";

  constructor(private http:Http){}

  //function to upload image for upload module

  //function to upload image for detect module

  //function to upload image for verify service

  //function to upload images for group module

  //test function

  test($event:any):void
  {
    console.log($event.file.name +'from Service');
  }


}
