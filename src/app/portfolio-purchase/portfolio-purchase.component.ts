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
  constructor(private _http: HttpService, private userService: UserService) {
    this.form = new FormGroup({
      qty: new FormControl('', Validators.required),
      side: new FormControl('', [Validators.required ]),
      type: new FormControl('', [Validators.required ]),
      time_in_force: new FormControl('', [Validators.required ]),
      limit_price: new FormControl('', [Validators.required ]),
      stop_price: new FormControl('', [Validators.required ])
    });
   }

  ngOnInit() {

  }

  submitOrder(){
    var data = ({
      "qty": this.form.value.qty,
      "side": this.form.value.side,
      "type": this.form.value.type,
      "time_in_force": this.form.value.time_in_force,
      "limit_price": this.form.value.limit_price,
      "stop_price": this.form.value.stop_price
    })
    console.log(data)
    this.userService.submitAlpacaOrder(data)
  }

}
