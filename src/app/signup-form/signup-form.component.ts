import { UsarnameValidators } from './username.validators';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username : new FormControl('',
    Validators.required, 
    UsarnameValidators.shouldBeUnique
    /*  Validators.minLength(4),
    UsarnameValidators.cannotContainSpace,    
    
    para usar esses campos necessita[] mas usando isso não consegue trabalhar com assincronos
    como o metodo shouldBeUnique*/  
    ),
    password : new FormControl('', Validators.required)
  })


  /* login() {
   let isValid = authService.login(this.form.value);
   if (!isValid) {
       this.form.setErrors({
         invalidLogin: true
       })
   } */

   login() {
        this.form.setErrors({
          invalidLogin: true
    });
  }

  
  get username(){
    return this.form.get('username')
  }  

  get password(){
    return this.form.get('password')
  }  
}

 
