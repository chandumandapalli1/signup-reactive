import { Component,OnDestroy,OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'signup-reactive';
//new way of assaigning values in  Angular 
  registerForm!:FormGroup;
  submitted:boolean=false;
  //here added as private because formBuilder is confined to this component only 
  // and not let any other outer component modify this formBuilder


  constructor(  private formBuilder:FormBuilder)
  {

  }


  ngOnInit(){
    //all properties that are to be added in forms are mentioned here


    this.registerForm=this.formBuilder.group({
      //first filed is deafault value to be presntin the firstName and from 
      //second field is is under validation 
      firstName:['',[Validators.required,Validators.minLength(2)]],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
      //here requiredTrue bcz only when it is checked then move forward
      acceptTandC:[false,Validators.requiredTrue],

    },{
      Validators:PasswordChecker('password','confirmPassword'),

    })
  }
//instead of calling everytime this.registerForm.controls.firstName and remaining 
//characters building a f() so that the long syntax can be avoided here...

  get h()
  {
    return this.registerForm.controls;

  }

onSubmit()
{
  this.submitted=true;
  if(this.registerForm.invalid)
  {
    return ;
  }
  console.table(this.registerForm.value);
  console.table(this.registerForm);
  alert("Success Signup\n" +JSON.stringify(this.registerForm.value));

}

  onReset()
  {
    this.submitted=false;
    this.registerForm.reset();


  }

  ngOnDestroy(): void {
    
  }


}
