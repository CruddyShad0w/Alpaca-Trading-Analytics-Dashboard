import { Component, OnInit } from '@angular/core';

import { ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

import { UserService } from './../user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" }
  ];
  public lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(255,0,0,0.3)"
    }
  ];

  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];

  loginStatus: false;
  accountInfo: object;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginStatus = this.userService.getLogInStatus()
    this.userService.refreshAlpacaAccount()
    this.accountInfo = this.userService.getAlpacaAccount()
    console.log('this', this.accountInfo)
  }

}
