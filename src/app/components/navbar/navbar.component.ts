import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Funcionamiento del hamburger menu
  Testing(){
          if ($('.list').css('display') === 'none'){
              $('#fafa').attr('class', 'far fa-times');
              $('#fafa').css('font-size', '30px');
              $('.list').slideToggle();
          }
          else{
              $('#fafa').attr('class', 'far fa-bars');
              $('#fafa').css('font-size', '30px');
              $('.list').slideToggle();
          }
  }

  logoW:string = "assets/images/GroupMonW.png"
  
}
