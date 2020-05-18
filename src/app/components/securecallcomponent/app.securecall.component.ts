import { Component, OnInit } from '@angular/core';
import { RegisterUser, LoginUser } from '../../models/app.models';
import { SecureService } from '../../services/app.secure.service';

@Component({
  selector: 'app-securecall-component',
  template: `
    <input type="button" value="Register" (click)="register()"/>
    <br/>
    <input type="button" value="Login" (click)="login()"/>
    <br/>
    <input type="button" value="Get Data" (click)="getResponse()"/>
    <br/>
  `
})
export class SecureCallComponent implements OnInit {
  constructor(private serv: SecureService) { }

  ngOnInit(): void { }
  register(): void {
    const user = new RegisterUser('tejas@abc.com', 'P@ssw0rd_', 'P@ssw0rd_');
    this.serv.registerUser(user).subscribe((resp)=> {
        console.log(`Received Response ${JSON.stringify(resp)}`);
    }, (error)=> {
      console.log(`Errror Response ${JSON.stringify(error)}`);
    });
  }

  login(): void {
    const user = new LoginUser('tejas@abc.com', 'P@ssw0rd_');
    this.serv.loginUser(user).subscribe((resp)=> {
        console.log(`Received Response ${JSON.stringify(resp)}`);
        // save token in localstorage
        localStorage.setItem('token', resp.message);
    }, (error)=> {
      console.log(`Errror Response ${JSON.stringify(error)}`);
    });

  }
  getResponse(): void {
      const token =  localStorage.getItem('token');
      this.serv.getData(token).subscribe((resp)=>{
        console.log(`Received Response ${JSON.stringify(resp)}`);
      },(error)=> {
        console.log(`Errror Response ${JSON.stringify(error)}`);
      });
  }
}
