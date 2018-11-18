import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactMethods = [
    {id: 1, name:'email'},
    {id: 2, name:'carta'},
    {id: 3, name:'SMS'},
    {id: 4, name:'post'},
    {id: 5, name:'teste'},
]

radios = [
  {id: 1, name:'teste-1'},
  {id: 2, name:'teste-2'},
  {id: 3, name:'teste-3'},
  {id: 4, name:'teste-4'},
  {id: 5, name:'teste-5'},
]
  
  log(firstName) {
    console.log(firstName)
  }

  submit(f){
    console.log(f)
  }

}
