import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {contact} from "./contacts/contact";
import {NewContactComponent} from "./contacts/new-contact";


@Component({
    selector: 'my-app',
    template: `
       <!--<h1>Hi</h1>-->
       <!--<contact-list></contact-list> -->
       <header>
          <nav>
              <a [routerLink]="['Contacts']">Contacts</a>
              <a [routerLink]="['NewContacts']">| New Contact</a>
          </nav>
       </header>
       <div class="main">
          <router-outlet></router-outlet>
       </div>
    `,
   directives: [ContactListComponent,NewContactComponent,ROUTER_DIRECTIVES],
  //  styleUrls: ['../src/css/app.css'],
})

@RouteConfig([
  //{path:'/',name:'Home', component:AppComponent},
  {path:'/contacts',name:'Contacts',component:ContactListComponent},//useAsDefault:true
  {path:'/contact/add',name:'NewContacts',component:NewContactComponent},
  {path:'/contact/add/:lastName',name:'NewContactsParams',component:NewContactComponent},
])
export class AppComponent {
  constructor(){}
}
