import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from "../contact.component";
import {ContactService} from "./contact.service";
import {contact} from "./contact";
import {HTTPTestService} from "./http-test.service";
import {HTTPTestComponent} from "./http-test.component";


@Component({
  //moduleId: module.id,
  selector: 'contact-list',
  template: `
        <ul>
             <li *ngFor="#contact of contacts, #i=index" (click)="onClick(contact, i)" [class.onClicked]="selectedContact == contact">
            {{i}} &nbsp;{{contact.fistName}}&nbsp;{{contact.lastName}}</li>
        </ul>
        <contact [contact]="selectedContact"></contact>
        <http-test></http-test>
    `,
  providers:[ContactService],
 directives:[ContactComponent, HTTPTestComponent],
})
export class ContactListComponent implements OnInit{
  // public contacts = [
  //   {fistName: 'Wuttipong', lastName: 'Thongmon'},
  //   {fistName: 'Wuttisak', lastName: 'Thongmon'},
  //   {fistName: 'Nattawat', lastName: 'Thongmon'},
  //   {fistName: 'Suwit', lastName: 'Thongmon'},
  // ];

  public contacts = [];
  public selectedContact = {};
  private _index:number;
  onClick(contact, index) {
   // this.clearDetail();
   // contact.showDetail = true;
    this.selectedContact = contact;

  }

  private  clearDetail(){
    this.contacts.forEach(function(val, index){
      val.showDetail = false;
    });
  }

  constructor(private _ContactService: ContactService) { }

  public getContact(){
    this._ContactService.getContacts().then((contacts: contact[]) => this.contacts = contacts);
  }
  ngOnInit():any {

    this.getContact();
  }

}
