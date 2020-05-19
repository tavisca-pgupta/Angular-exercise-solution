import { Component, OnInit } from '@angular/core';
import { RegisterUser, LoginUser, ResponseData, ProductResponse } from '../../models/app.models';
import { SecureService } from '../../services/app.secure.service';

@Component({
  selector: 'app-securecall-component',
  templateUrl: './app.securecall.view.html'
})
export class SecureCallComponent implements OnInit {
  createUser: RegisterUser;
  loginUser: LoginUser;
  products: Array<ProductResponse>;
  response: ResponseData;
  canLogin: boolean;
  constructor(private serv: SecureService) {
    this.createUser = new RegisterUser("", "", "");
    this.loginUser = new LoginUser("", "");
    this.products = Array<ProductResponse>();
    this.response = new ResponseData("");
    this.canLogin = false;
  }


  ngOnInit(): void { }
  registerUser(): void {
    const user = new RegisterUser('tejas@abc.com', 'P@ssw0rd_', 'P@ssw0rd_');
    this.serv.registerUser(user).subscribe((resp)=> {
        //console.log(`Received Response ${JSON.stringify(resp)}`);
        this.response = resp;

      if (this.response.message.length !== 0) {
        this.canLogin = true;
      }
    }, (error)=> {
      console.log(`Errror Response ${JSON.stringify(error)}`);
    });
  }

  authenticateUser(): void {
    const user = new LoginUser('tejas@abc.com', 'P@ssw0rd_');
    this.serv.loginUser(user).subscribe((resp)=> {
        //console.log(`Received Response ${JSON.stringify(resp)}`);
        this.response = resp;
        // save token in localstorage
        localStorage.setItem('token', resp.message);
    }, (error)=> {
      console.log(`Errror Response ${JSON.stringify(error)}`);
    });

  }
  getProducts(): void {
      //const token =  localStorage.getItem('token');
      this.serv.getData().subscribe((resp)=>{
        this.products = resp;
        //console.log(`Received Response ${JSON.stringify(resp)}`);
      },(error)=> {
        console.log(`Errror Response ${JSON.stringify(error)}`);
      });
  }
  clearRegisterInfo(): void {
    this.createUser = new RegisterUser("", "", "");
  }
  clearLoginInfo(): void {
    this.loginUser = new LoginUser("", "");
  }
}
