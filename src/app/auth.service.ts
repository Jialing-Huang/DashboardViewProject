import { Injectable } from '@angular/core';
import { Subject, Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {infoData} from './front-end/mat-nav/infoData.model'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

//Set login status flag for html
private isAuthenticated = false;

//Set token variable
private token:string;


//Setna login status listener
private authStatusListner = new Subject<boolean>();
private regiStatusListner = new Subject<boolean>();
private dataStatusListner = new Subject<infoData>();
receivedData:infoData = {
              firstname:'',
              lastname:'',
              title:'',
              department:'',
              company:''
};
  constructor(private http:HttpClient, private router:Router) { }

  //Set the main functions
  createAdmin(email:string, 
              password:string,
              firstname:string,
              lastname:string,
              title:string,
              department:string,
              company:string){
    const adminData = {email:email, 
                      password:password,
                      firstname:firstname,
                      lastname:lastname,
                      title:title,
                      department:department,
                      company:company};
    this.http.post("http://localhost:3000/register",adminData)
             .subscribe(
              // If backend feedback correct response
              response=>{
                if(response){
                    console.log(response);
                    this.regiStatusListner.next(true);
                    this.authStatusListner.next(false);
                    this.isAuthenticated = false;
                  }               
                },
              // If backend feedback error info on connection
              error=>{
                this.regiStatusListner.next(false);
                this.authStatusListner.next(false);
              }
             );
  }

  login(email:string, password:string){
    const authData = {email:email, password:password};
    this.http.post<{token:string,data:object}>("http://localhost:3000/login",authData)
             .subscribe(
              response=>{
                  //Get the responsed token from the backend side
                  const token = response.token;
                  this.token = token;

                  //Get the responsed data from the backend side
                  const tempData = response.data;
            
                  //Print response
                  console.log(response.data);
                  console.log(tempData);
                  
                  //Assgin transferred data into receivedData structure
                  this.receivedData.firstname = tempData['firstname'];
                  this.receivedData.lastname = tempData['lastname'];
                  this.receivedData.title = tempData['title'];
                  this.receivedData.department = tempData['department'];
                  this.receivedData.company = tempData['company'];
                  console.log(this.receivedData); 

                  //If token is not null, then get flags and variables
                  if(token){
                    this.isAuthenticated = true;
                    this.authStatusListner.next(true);
                 
                    this.dataStatusListner.next(this.receivedData);
                    this.router.navigate(['/list']);
                  }
                },
              // If backend feedback error info on connection
              error=>{
                this.authStatusListner.next(false);
                this.router.navigate(['/list']);
              }
             );
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListner.next(false);
    this.router.navigate(['/']);
  }

//Set functions to get the three private variables
getToken(){
  return this.token;
}

getData():Observable<infoData>{

  return this.dataStatusListner.asObservable();
}

getIsAuth(){
  return this.isAuthenticated;
}

getAuthStatusListner(){
  return this.authStatusListner.asObservable();
}

//Send the register success/fail flag to register component
getRegiStatusListner():Observable<boolean>{
  return this.regiStatusListner.asObservable();
}

}
