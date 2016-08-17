import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/Rx';
@Injectable()
export class HTTPTestService{
  constructor(private http: Http){}
  getCurrentTime(){

    return this.http.get("http://date.jsontest.com").map(res => res.json());
    // return this._http.get('http://date.jsontest.com')
    //   .map(res => res.json());
  }
}
