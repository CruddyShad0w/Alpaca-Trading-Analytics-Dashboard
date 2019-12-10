import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { UserService } from './../user.service';
import { HttpService } from "./../http.service";

@Component({
  selector: 'app-portfolio-purchase',
  templateUrl: './portfolio-purchase.component.html',
  styleUrls: ['./portfolio-purchase.component.css']
})
export class PortfolioPurchaseComponent implements OnInit {
  form: FormGroup;
  searchForm: FormGroup;
  constructor(private _http: HttpService, private userService: UserService) {
    this.form = new FormGroup({
      symbol: new FormControl('', Validators.required),
      qty: new FormControl('', Validators.required),
      side: new FormControl('', [Validators.required ]),
      type: new FormControl('', [Validators.required ]),
      time_in_force: new FormControl('', [Validators.required ]),
      limit_price: new FormControl('', [Validators.required ]),
      stop_price: new FormControl('', [Validators.required ])
    });

    this.form = new FormGroup({
      index: new FormControl('', Validators.required),
      symbol: new FormControl('', Validators.required)
    })
   }

  ngOnInit() {

  }

  submitBuyOrder(){
    var side = "buy"
    var data = ({
      "symbol": this.form.value.symbol,
      "qty": this.form.value.qty,
      "side": side,
      "type": this.form.value.type,
      "time_in_force": this.form.value.time_in_force,
      "limit_price": this.form.value.limit_price,
      "stop_price": this.form.value.stop_price
    })
    console.log(data)
    this.userService.submitAlpacaOrder(data)
  }
  submitSellOrder(){
    var side = "sell"
    var data = ({
      "symbol": this.form.value.symbol,
      "qty": this.form.value.qty,
      "side": side,
      "type": this.form.value.type,
      "time_in_force": this.form.value.time_in_force,
      "limit_price": this.form.value.limit_price,
      "stop_price": this.form.value.stop_price
    })
    console.log(data)
    this.userService.submitAlpacaOrder(data)
  }
}
