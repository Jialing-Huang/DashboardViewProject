import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';
import { infoData } from './infoData.model';

//----------------------------


//----------------------------

@Component({
  selector: 'app-mat-nav',
  templateUrl: './mat-nav.component.html',
  styleUrls: ['./mat-nav.component.css']
})
export class MatNavComponent implements OnInit {
  userIsAuthenticated = false;
  errorStatus = true;

  adminInfo:infoData = {
    firstname:'',
    lastname:'',
    title:'',
    department:'',
    company:''
  };

  authListenerSubs:Subscription;
  dataListenerSubs:Subscription;

  constructor(private authservice:AuthService) { }

  chartData:any[];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.authListenerSubs = this.authservice.getAuthStatusListner().subscribe(authStatus => {
                                  this.userIsAuthenticated = authStatus;                               
                                  console.log(this.userIsAuthenticated);
                                  if(this.userIsAuthenticated == false){
                                    this.errorStatus = false;
                                  }
                                });
  this.dataListenerSubs = this.authservice.getData().subscribe(receivedData=>{
      this.adminInfo.firstname = receivedData['firstname'];
      this.adminInfo.lastname = receivedData['lastname'];
      this.adminInfo.title = receivedData['title'];
      this.adminInfo.department = receivedData['department'];
      this.adminInfo.company = receivedData['company'];
      console.log(this.adminInfo);
   });
  
    this.generateData();  //To generate random data for charts
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.authListenerSubs.unsubscribe();
    this.dataListenerSubs.unsubscribe();
  }

  onLogout(){
    this.authservice.logout();
    console.log(this.userIsAuthenticated);
    this.errorStatus = true;
    this.adminInfo = {
      firstname:'',
      lastname:'',
      title:'',
      department:'',
      company:''
    };
  }

  generateData() {
    this.chartData = [];
    for (let i = 0;i<(8 + Math.floor(Math.random() * 10));i++){
      this.chartData.push(
          {
            index:i,
            value:Math.floor(Math.random() * 100)
          }
          // Math.floor(Math.random() * 100)
        );
    }
  }


}
