import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { UserService } from './../user.service';
import { HttpService } from "./../http.service";
@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  positions;
  dataHolder;
  load=false;
  constructor(private _http: HttpService, private userService: UserService) { }

  ngOnInit() {
    var returnItem = this.userService.getAlpacaPositions().then(data=>this.function(data))
    this.positions = this.userService.getUserAssets()
    // example of get bars
    //this.userService.getBars(["TSLA","AAPL"], "minute", "7")

    console.log(returnItem)
  }
  function(data){
    console.log('IN FUNCTION', data)
  }

  refresh(){
    this.ngOnInit()
    this.load=true;
    var returnItem = this.userService.getAlpacaPositions()
    this.positions = this.userService.getUserAssets()
  }



}
