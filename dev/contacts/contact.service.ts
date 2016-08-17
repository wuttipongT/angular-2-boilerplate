import {Injectable} from "angular2/core";
import {Contact} from "./mock-contact";
import {contact} from "./contact";
@Injectable()
export class ContactService{
  getContacts(){
    return Promise.resolve(Contact);
  }

  insertContact(contact: contact){
    Promise.resolve(Contact).then((contacts: contact[])=> contacts.push(contact));
  }
}
