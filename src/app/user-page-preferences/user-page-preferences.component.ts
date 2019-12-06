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
  result;

  constructor(private _http: HttpService, private userService: UserService) {
    this.form = new FormGroup({
      theme: new FormControl('', Validators.required),
      baseGraph: new FormControl('', [Validators.required]),
      defaultGraphDays: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
    console.log(this.form)
  }

  async updateUserPreferences(){
    var data = ({
      "theme": this.form.value.theme,
      "baseGraph": this.form.value.baseGraph,
      "defaultGraphDays":this.form.value.defaultGraphDays
    })
    console.log(data)
    this.result = await this.userService.updateUserPreferences(data)
    console.log(this.result)
    return this.result
  }

}
