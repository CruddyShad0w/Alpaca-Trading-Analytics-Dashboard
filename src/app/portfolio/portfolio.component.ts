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
    {data: [2043.32, 2054.32, 2014.43, 1999.11, 2034.22, 2001.76, 2011.45], label: "Series A" }
  ];
  public lineChartLabels: Label[] = [
      "Dec-02",
      "Dec-03",
      "Dec-04",
      "Dec-05",
      "Dec-06",
      "Dec-09",
      "Dec-10"
    ];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(57,114,249,0.3)"
    }
  ];

  public lineChartLegend = false;
  public lineChartType = "line";
  public lineChartPlugins = [];

  loginStatus: false;
  accountInfo: object;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginStatus = this.userService.getLogInStatus()
    this.userService.refreshAlpacaAccount()
    this.accountInfo = this.userService.getAlpacaAccount()
    // console.log('JERE',this.userService.getBars(["TSLA","AAPL"], "minute", "7").then(data=> this.function(data)))

    console.log('this', this.accountInfo)
  }
  // function(data){
  //
  // }
}
