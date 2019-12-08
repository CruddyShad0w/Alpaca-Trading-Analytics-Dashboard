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
  //Json object of the current users baseUrl, secretKey, keyId
  alpacaLogin;

  userAssets;
  alpacaAccount;

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
      this.loggedIn=true;
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
    this.alpacaLogin=null;
    this.loggedIn=false;
  }

  getLogInStatus(){
    return this.loggedIn;
  }
  async updateUserAlpacaInfo(data){
    console.log("user: " + this.currentUser)
    this.output2 = await this._http.updateUserAlpacaInfo(this.currentUser, data)
    this.alpacaLogin = data
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
      this.refreshAlpacaAccount()
      this.output2 = true
    }
    return this.output2
  }

  async refreshAlpacaAccount(){
    this.alpacaAccount = await this._http.getAlpacaAccount(this.alpacaLogin)
    console.log(this.alpacaAccount)
  }

  getAlpacaAccount(){
    this.refreshAlpacaAccount()
    return this.alpacaAccount
  }

  async getAlpacaPositions(){
    this.userAssets = await this._http.getAlpacaPositions(this.alpacaLogin)
    console.log(this.userAssets)
    return this.userAssets
  }

  getUserAssets(){
    return this.userAssets
  }

  async submitAlpacaOrder(data){
    var returnItem = await this._http.submitAlpacaOrder(data)
    console.log(returnItem)
    return returnItem
  }
  async logOutAlpaca(){
    var returnItem = await this._http.logOutAlpaca()
    console.log(returnItem)
    return returnItem
  }
  // Eample json for getbars post
  // {"symbols":["TSLA","AAPL"],
  // "time":"minute",
  // "limit":"7",
  // "alpaca_info": {
  //   "baseUrl":"https://paper-api.alpaca.markets",
  //   "keyId":"PKDQ16XBLHH85LJD24K2",
  //   "secretKey":"LU1UZKo3D8NMGZYMrGaNHoJQassWO/xm40gLEM6t"
  // }}
  async getBars(symbols, time, limit){
    var data = (
      {"symbols":symbols,
      "time":time,
      "limit":limit,
      "alpaca_info": this.alpacaLogin
    )
    var returnItem = await this._http.getBars(data)
    return returnItem
  }

  async updateUserPreferences(data){
    var returnItem = await this._http.updateUserPreferences(this.currentUser, data)
    console.log(returnItem)
    return returnItem
  }
}
