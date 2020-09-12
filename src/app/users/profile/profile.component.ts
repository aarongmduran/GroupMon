import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../API/services/auth.service';
import { Router } from '@angular/router';
import { GroupsService } from '../../API/content/groups.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userName;
  public userEmail;
  public userMoney;
  public userMovements;
  public userID = this.authService.userData.uid;
  public selected = 'en';

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public authGroup: GroupsService
  ) { }

  ngOnInit(){
    this.userName = this.authService.getUser(this.userID).subscribe((userData) => {
      userData.forEach((groupData: any) => {
        this.userName = groupData.payload.doc.data().displayName;
        this.userEmail = groupData.payload.doc.data().email;
        this.userMoney = groupData.payload.doc.data().dinero;
        this.userMovements = groupData.payload.doc.data().movimientos;
      });
    });
  }

  // Aumenta la cantidad de dinero de un usuario.
  public increaseAmount(amount, concepto, selected){
    const newMovements = this.userMovements;
    let money = parseInt(this.userMoney);
    amount = parseInt(amount);
    if (amount > 0 && concepto.length>0){
      money = money + amount;
      newMovements.push('Has ingresado ' + amount + ' € ' + selected + ' ' + concepto);
      const data = {
        dinero: money,
        movimientos: newMovements
       };
      this.authService.UpdateUser(data);
    }else if (amount > 0){
      money = money + amount;
      newMovements.push('Has ingresado ' + amount + ' €');
      const data = {
        dinero: money,
        movimientos: newMovements
       };
      this.authService.UpdateUser(data);
    }
    else{
      alert('Introduce una cantidad');
    }
  }

  // Disminuye la cantidad de dinero de un usuario.
  public decreaseAmount(amount, concepto, selected){
    const newMovements = this.userMovements;
    let money = parseInt(this.userMoney);
    amount = parseInt(amount);
    if (amount > 0 && concepto.length>0){
      money = money - amount;
      newMovements.push('Has gastado ' + amount + ' € ' + selected + ' ' + concepto);
      const data = {
        dinero: money,
        movimientos: newMovements
       };
      this.authService.UpdateUser(data);
    }else if (amount > 0){
      money = money - amount;
      newMovements.push('Has gastado ' + amount + ' €');
      const data = {
        dinero: money,
        movimientos: newMovements
       };
      this.authService.UpdateUser(data);
    }
    else{
      alert('Introduce una cantidad');
    }
  }

  // Recoge los movimientos de dinero de un usuario,
  public getMovements(){
    return this.userMovements;
  }
}
