import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  loginStatus: false;
  accountInfo:object;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginStatus = this.userService.getLogInStatus()
    this.userService.refreshAlpacaAccount()
    this.accountInfo = this.userService.getAlpacaAccount()
    console.log('this', this.accountInfo)
  }

}
