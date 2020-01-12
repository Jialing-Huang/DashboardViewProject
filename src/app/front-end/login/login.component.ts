import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() errorFlag:boolean;
  registerDone:boolean;
  regiFlagStauts = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
           this.email.hasError('email') ? 'Not a valid email' :
           '';
  }

  constructor(private authservice:AuthService) { }

  ngOnInit() { 
    this.registerDone = true;
  }

  onLogin(f:NgForm){
    this.authservice.login(
        f.value.email as string,
        f.value.password as string
    );
  }

  onRegister(){
    this.registerDone = false; 
  }
}
