import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

// import { UserService } from './../user.service';
// import { HttpService } from "./../http.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  username;
  password;
  loginErrors = [];

  constructor(){//private _http: HttpService, private userService: UserService) {
      this.form = new FormGroup({
        user: new FormControl('', Validators.required),
        pass: new FormControl('', [Validators.required ])

      });
    }


  ngOnInit() {
    console.log(this.form)
  }
  logUserIn() {
    // this.loginErrors = this.userService.logUserIn(this.username, this.password)
    // console.log(this.loginErrors)
  }

}
