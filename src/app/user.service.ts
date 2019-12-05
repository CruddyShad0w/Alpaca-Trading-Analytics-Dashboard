import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser;
  loggedIn;
  users:object;
  usernameValid;
  passwordValid;
  pair;
  output;
  output2;
  alpacaLogin;

  constructor(private _http: HttpService) {
    }
  async logUserIn(username, password){
    var data = ({
      "username":username,
      "passwordHash":password
    })
    this.output = await this._http.logUserIn(data)
    if(Boolean(this.output[0]) && Boolean(this.output[1])){
      console.log('user logged in as',username)
      this.currentUser = this.output[2]
      console.log('user id:', this.currentUser)
      this.output.pop(2)
      console.log('attempting alpaca login')
      var logger = this.logUserIntoAlpaca()
      console.log(logger)

    }
    return this.output
  }
  async getUserId(){
    console.log('retreiving current user id: id in service -', this.currentUser)
    return this.currentUser
  }
  logUserOut(){
    this.currentUser=null;
    this.loggedIn=false;
  }

  getLogInStatus(){
    return this.loggedIn;
  }
  async updateUserAlpacaInfo(data){
    console.log("user: " + this.currentUser)
    this.output2 = await this._http.updateUserAlpacaInfo(this.currentUser, data)
    console.log('output from htttp put', this.output2)
    return this.output2
  }
  async logUserIntoAlpaca(){
    console.log("logging user into alpaca")
    this.alpacaLogin = await this._http.getAlpacaUserInfo(this.currentUser)
    console.log(this.alpacaLogin)
    console.log(this.alpacaLogin.baseUrl)
    if(this.alpacaLogin.baseUrl === "N/A"){
      console.log("No alpaca login")
      this.output2 = false
    }
    else{
      this.output2 = await this._http.logUserInAlpaca(this.alpacaLogin)
      console.log("user logged into alpaca")
      this.output2 = true
    }
    return this.output2
  }

  async getAlpacaAssets(){
    var returnItem = await this._http.getAlpacaAssets()
    return returnItem
  }

  async getAlpacaAccount(){
    var returnItem = await this._http.getAlpacaAccount()
    return returnItem
  }
}
