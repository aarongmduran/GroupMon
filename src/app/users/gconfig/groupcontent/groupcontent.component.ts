import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { GroupsService } from '../../../API/content/groups.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupusersComponent } from '../groupusers/groupusers.component';

@Component({
  selector: 'app-groupcontent',
  templateUrl: './groupcontent.component.html',
  styleUrls: ['./groupcontent.component.scss']
})
export class GroupcontentComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private storage: AngularFireStorage,
    public groupService: GroupsService,
    public dialogRef: MatDialogRef<GroupusersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    public groups = this.data.grupos;
    public moneyGroup;
    public grupo;
    public movements;
    selected = 'en';

    onNoClick(): void {
      this.dialogRef.close();
    }

    // Recoge de forma dinámica el contenido de los grupos.
    ngOnInit() {
      this.groupService.getGroups().subscribe((groupsSnapshot) => {
        groupsSnapshot.forEach((groupData: any) => {
          if(groupData.payload.doc.id === this.data.id){
            this.moneyGroup = groupData.payload.doc.data().dinero;
            this.movements = groupData.payload.doc.movimientos;
          }
        });
      });
    }

    // Devuelve un grupo por su ID:
    public getGroupById(documentId){
      const pos = this.getPos(documentId);
      return this.groups[pos];
    }

    // Devuelve la posición en el array de groupos de un grupo por su id.
    public getPos(documentId){
      let i = 0;
      while (this.groups[i].id !== documentId){
        i = i + 1;
      }
      return i;
    }

    // Aumenta el dinero de un grupo
    public increaseAmount(amount, concepto, documentId, selected){
      const userlogged = this.afAuth.auth.currentUser.displayName;
      const pos = this.getPos(documentId);
      const newMovements = this.groups[pos].data.movimientos;
      let money = parseInt(this.moneyGroup);
      amount = parseInt(amount);
      if (amount > 0 && concepto.length>0){
        money = money + amount;
        newMovements.push(userlogged + ' ha ingresado ' + amount + ' € ' + selected + ' ' + concepto);
        const data = {
          dinero: money,
          movimientos: newMovements
         };
        this.groupService.updateGroup(this.groups[pos].id, data);
      }else if (amount > 0){
        money = money + amount;
        newMovements.push(userlogged + ' ha ingresado ' + amount + ' €');
        const data = {
          dinero: money,
          movimientos: newMovements
         };
        this.groupService.updateGroup(this.groups[pos].id, data);
      }
      else{
        alert('Introduce una cantidad');
      }
 
    }

    // Disminuye el dinero de un grupo.
    public decreaseAmount(amount, concepto, documentId, selected){
      const userlogged = this.afAuth.auth.currentUser.displayName;
      const pos = this.getPos(documentId);
      const newMovements = this.groups[pos].data.movimientos;
      let money = parseInt(this.moneyGroup);
      amount = parseInt(amount);
      if (amount > 0 && concepto.length>0){
        newMovements.push(userlogged + ' ha gastado ' + amount + ' € ' + selected + ' ' + concepto);
        money = money - amount;
        const data = {
          dinero: money,
          movimientos: newMovements
         };
        this.groupService.updateGroup(this.groups[pos].id, data);
      }else if (amount > 0){
        money = money - amount;
        newMovements.push(userlogged + ' ha gastado ' + amount + ' €');
        const data = {
          dinero: money,
          movimientos: newMovements
         };
        this.groupService.updateGroup(this.groups[pos].id, data);
      }
      else{
        alert('Introduce una cantidad');
      }
    }

    public getMovements(documentId){
      const pos = this.getPos(documentId);
      return this.groups[pos].data.movimientos;
    }
}
