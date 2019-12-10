import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  async logUserIn(data) {
    let results = await this.http.post('https://alpaca-wrangler-spring-backend.herokuapp.com/login', data).toPromise();
    return results
  }
  async resetPassword(id, data){
    let results = await this.http.post('http://alpaca-wrangler-flask-backend.herokuapp.com/resetPassword/'+id,data)
    return results
  }
  async logUserInAlpaca(data){
    let results = await this.http.post('http://alpaca-wrangler-flask-backend.herokuapp.com/login/',data).toPromise();
    return results
  }

  async getAlpacaUserInfo(id){
    let results = await this.http.get('https://alpaca-wrangler-spring-backend.herokuapp.com/userAlpacaInfo/'+id).toPromise();
    return results
  }
  async updateUserAlpacaInfo(id, data){
    console.log('https://alpaca-wrangler-spring-backend.herokuapp.com/setAlpaca/'+id)
    console.log(data)
    let results = await this.http.post('https://alpaca-wrangler-spring-backend.herokuapp.com/setAlpaca/'+id,data).toPromise();
    return results
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
  async getBars(data){
    let results = await this.http.post('http://alpaca-wrangler-flask-backend.herokuapp.com/getBars/',data).toPromise();
    return results
  }

  async updateUserPreferences(id, data){
    let results = await this.http.post('https://alpaca-wrangler-spring-backend.herokuapp.com/setSettings/'+id,data).toPromise()
    return results
  }
  async getAlpacaAssets(data){
    let results = await this.http.post('https://alpaca-wrangler-flask-backend.herokuapp.com/assets/', data).toPromise()
    return results
  }

  async getAlpacaAccount(data){
    let results = await this.http.post('https://alpaca-wrangler-flask-backend.herokuapp.com/account/', data).toPromise()
    return results
  }

  async getAlpacaPositions(data){
    let results = await this.http.post('https://alpaca-wrangler-flask-backend.herokuapp.com/positions/', data).toPromise()
    return results
  }

  async submitAlpacaOrder(data){
    let results = await this.http.post('https://alpaca-wrangler-flask-backend.herokuapp.com/stockAction/', data).toPromise()
    return results
  }

  async logOutAlpaca(){
    let results = await this.http.get('https://alpaca-wrangler-flask-backend.herokuapp.com/logout')
    return results
  }

}
