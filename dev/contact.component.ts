/**
 * Created by Kasco B on 9/8/2559.
 */
import {Component} from "angular2/core";
import {Router} from "angular2/router";

@Component({
  selector: "contact",
  template: `
    <input [(ngModel)]="contact.fistName" type="text">
    <div>
       <p>Hello World! {{contact.fistName}}&nbsp;{{contact.lastName}}</p>
       <button (click)="onCreateNew()">Crate New Contact</button>
    </div>
  `,
  inputs: ["contact"],
  styles:[`
    input{padding: 10px;}
    p{border: 1px solid #0f7595;}
  `],
})

export class ContactComponent {
 public contact = {};
 constructor(private _route: Router){}
  onCreateNew(){
    this._route.navigate(['NewContactsParams', {lastName: 'xx'}]);
  }

}
