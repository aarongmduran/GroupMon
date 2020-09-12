import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../API/services/auth.service';
import { EditProfileComponent } from '../../users/edit-profile/edit-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss']
})
export class NavbarUserComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private dialog: MatDialog) { }

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

  // Abre el modal de editar el perfil. 
  openEditProfile(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '70vh',
      height: '70vh'
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }

  logoW:string = "assets/images/GroupMonW.png"

}
