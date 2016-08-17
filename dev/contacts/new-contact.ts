import {Component, OnInit} from 'angular2/core';
import {contact, contact} from "./contact";
import {ContactService} from "./contact.service";
import {Router, RouteParams} from "angular2/router";

@Component({
  template: ` 
  <h1>New Contact</h1>
  <div>
    <label for="fistName">First Name:</label>
    <input type="text" [(ngModel)]="contact.firstName" id="fistName">
  </div>
  <div>
    <label for="lastName">Last Name</label>
    <input type="text" [(ngModel)]="contact.lastName" id="lastName">
  </div>
  <label>fdsfds</label>{{lastName}}
`,
  providers:[ContactService],
  styles: [`
  label{
    display: inline-block;
    width: 140px;
  }
  input{width: 250px;}
`]
})
export class NewContactComponent implements OnInit{
  public contact = {};
  public lastName: string;
  constructor(private _contactService: ContactService, private  _router: Router, private _routeParams: RouteParams){}
  onAddContact(firstName, lastName){
    let contact: contact = {fistName: '', lastName: ''};
    this._contactService.insertContact(contact);
    this._router.navigate(['Contact']);
  }
  ngOnInit():any{
    this.lastName = this._routeParams.get('lastName')
  }
}
