import {Injectable} from "@angular/core";
import {Http,Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class fileUpload
{
  private serverUrl= "";

  constructor(private http:Http){}

  //function to upload image for upload module

  upload(data:any):void
  {
    console.log(data," From upload service function");
  }

  //function to upload image for detect module

  detect(data:any):void
  {
    console.log(data," From detect service function");
  }
  //function to upload image for verify service

  verify(data:any):void
  {
    console.log(data," From verify service function");
  }
  //function to upload images for group module

  group(data:any):void
  {
    console.log(data," From group service function");
  }

  similarity(data:any):void
  {
    console.log(data," From similarity service function");
  }

  train(data:any):void
  {
    console.log(data," From train service function");
  }

  identifty(data:any):void
  {
    console.log(data," From identify service function");
  }
}
