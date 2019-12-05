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

  async getAlpacaAssets(){
    let results = await this.http.get('https://alpaca-wrangler-flask-backend.herokuapp.com/assets').toPromise()
    return results
  }
  async getAlpacaAccount(){
    let results = await this.http.get('https://alpaca-wrangler-flask-backend.herokuapp.com/account').toPromise()
    return results
  }
}
