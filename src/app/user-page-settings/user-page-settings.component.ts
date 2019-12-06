import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { UserService } from './../user.service';
import { HttpService } from "./../http.service";

@Component({
  selector: 'app-user-page-settings',
  templateUrl: './user-page-settings.component.html',
  styleUrls: ['./user-page-settings.component.css']
})
export class UserPageSettingsComponent implements OnInit {
  form: FormGroup;
  baseUrl;
  apiKey;
  apiSecret;
  results;
  result2;
  alpacaLogin;
  loginStatus = false;

  constructor(private _http: HttpService, private userService: UserService) {
    this.form = new FormGroup({
      baseUrl: new FormControl('', Validators.required),
      apiKey: new FormControl('', [Validators.required]),
      apiSecret: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    console.log(this.form)
  }

  async updateUserAlpacaInfo() {
    var data = ({
      "baseUrl": this.form.value.baseUrl,
      "keyId": this.form.value.apiKey,
      "secretKey": this.form.value.apiSecret
    })
    console.log(data)
    this.result2 = await this.userService.updateUserAlpacaInfo(data)
    console.log(this.result2)
    console.log("user settings sent")
  }

  async logUserIntoAlpaca(){
    this.result2 = await this.userService.logUserIntoAlpaca()
    return this.result2
  }
  // getLogInStatus(){
  //   return this.userService.getLogInStatus()
  // }
}
