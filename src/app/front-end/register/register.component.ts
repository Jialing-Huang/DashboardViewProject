import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  regiStatusListner:Subscription;
  regiFlag:boolean;
  registerDone:boolean;

  constructor(private _formBuilder: FormBuilder,
              private authservice:AuthService) {}

  ngOnInit() {
    this.registerDone = false;

    this.firstFormGroup = this._formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      }      
    );
    this.secondFormGroup = this._formBuilder.group(
      {
        firstName: ['', Validators.required], 
        lastName: ['', Validators.required]
      }
      
    );
    this.thirdFormGroup = this._formBuilder.group(
      {
        title: ['', Validators.required],
        department: ['', Validators.required],
        company: ['', Validators.required]
      }  
    );
  }

  register(){
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);

    this.authservice.createAdmin(
      this.firstFormGroup.value.email,
      this.firstFormGroup.value.password,
      this.secondFormGroup.value.firstName,
      this.secondFormGroup.value.lastName,
      this.thirdFormGroup.value.title,
      this.thirdFormGroup.value.department,
      this.thirdFormGroup.value.company
    );

   this.authservice.getRegiStatusListner().subscribe(flag=>{
                      this.regiFlag = flag;
                      console.log(this.regiFlag);
                    });
    
    this.registerDone = true;
  }

}
