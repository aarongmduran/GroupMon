import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'dsi';
  imageBack:string = "assets/images/skyline3.png" 
  hombreMovil:string = "assets/images/hombre.jpg"
  mujerMovil1:string = "assets/images/mujerMovil.jpg"
  mujerMovil2:string = "assets/images/mujerMovil2.jpg"
  bbva:string = "assets/images/bbva.png"
  santander:string = "assets/images/santander.png"
  ubs:string = "assets/images/ubs.png"
  bankAmerica:string = "assets/images/bankamerica.png"
  gPay:string = "assets/images/gpay.png"
  applePay:string = "assets/images/applepay.png"
  paypal:string = "assets/images/paypal.png"
  bizum:string = "assets/images/bizum.png"
  amazon:string = "assets/images/amazon.png"
  visa:string = "assets/images/visa.png"
  uc3m:string = "assets/images/uc3m.png"
  business:string = "assets/images/business.jpg"

}
