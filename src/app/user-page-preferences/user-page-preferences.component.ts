import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { UserService } from './../user.service';
import { HttpService } from "./../http.service";

@Component({
  selector: 'app-user-page-preferences',
  templateUrl: './user-page-preferences.component.html',
  styleUrls: ['./user-page-preferences.component.css']
})
export class UserPagePreferencesComponent implements OnInit {
  form: FormGroup;
  passwordForm: FormGroup;
  result;

  constructor(private _http: HttpService, private userService: UserService) {
    this.form = new FormGroup({
      light: new FormControl('', Validators.required),
      dark: new FormControl('', Validators.required),
      index: new FormControl('', [Validators.required]),
      symbol: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      count: new FormControl('', [Validators.required]),
    });
    this.passwordForm = new FormGroup({
      password: new FormControl('',Validators.required),
      oldPassword: new FormControl('',Validators.required)
    })
   }


  ngOnInit() {
    console.log(this.form)
  }

  async updateUserPreferences(){
    var passItem = "Light"
    if (this.form.value.dark == true){
      passItem = "Dark"
    }
    var passItem2 = this.form.value.index + ":" + this.form.value.symbol
    console.log(passItem2)
    var data = ({
      "theme": passItem,
      "baseGraph": passItem2,
      "defaultGraphDays": this.form.value.count
    })
    console.log(data)
    this.result = await this.userService.updateUserPreferences(data)
    console.log(this.result)
    return this.result
  }
  async resetPassword(){
    var data = ({
      "oldPassword": this.passwordForm.value.oldPassword,
      "password":this.passwordForm.value.password
    })
    var returnItem = this.userService.resetPassword(data)
    return returnItem
  }

}
