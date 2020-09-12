import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/API/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  hide = true;
  isCheck = false;

  register(email, password){
    this.authService.SignUp(email, password);
  }

}
