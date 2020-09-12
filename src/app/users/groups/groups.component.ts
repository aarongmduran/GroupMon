import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { GroupsService } from '../../API/content/groups.service';
import { AuthService } from '../../API/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { CreategroupComponent} from '../gconfig/creategroup/creategroup.component';
import { GroupusersComponent } from '../gconfig/groupusers/groupusers.component';
import { GroupcontentComponent } from '../gconfig/groupcontent/groupcontent.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})

export class GroupsComponent implements OnInit {

  public documentId = null;
  public groups = [];
  newCantidad = 0;

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public groupService: GroupsService,
    private firestore: AngularFirestore,
    private dialog: MatDialog) {}

  // Recoge de forma dinámica el contenido de los grupos.
  ngOnInit() {
    this.groupService.getGroups().subscribe((groupsSnapshot) => {
      this.groups = [];
      groupsSnapshot.forEach((groupData: any) => {
          this.groups.push({
            id: groupData.payload.doc.id,
            data: groupData.payload.doc.data(),
            usuarios: groupData.payload.doc.usuarios,
            usuariosNombre: groupData.payload.doc.usuariosNombre,
            movimientos: groupData.payload.doc.movimientos
          });
      });
    });
  }

  // Abre el modal de crear un grupo.
  openDialog(): void {
    const dialogRef = this.dialog.open(CreategroupComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }

  // Abre el modal del contenido del grupo.
  openGroup(documentId): void {
    const dialogRef = this.dialog.open(GroupcontentComponent, {
      width: '70vh',
      height: '70vh',
      data: {id: documentId, grupos: this.groups}
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }

  // Abre el modal de los usuarios de un grupo.
  openUsers(documentId): void {
    const dialogRef = this.dialog.open(GroupusersComponent, {
      width: '250px',
      data: {id: documentId, grupos: this.groups}
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }

  // Elimina el grupo.
  public deleteGroup(documentId) {
    const actualUser = localStorage.getItem('userEmail').replace(/['"]+/g, '');
    const adminUser = this.groups[this.getPos(documentId)].data.usuarios[0];
    if (actualUser === adminUser){
      this.groupService.deleteGroup(documentId).then(() => {}, (error) => {
        console.error(error);
      });
    } else{
      alert('Solo el creador del grupo puede eliminarlo');
    }
  }

  // Da la posición en el array de grupos de un grupo por su id.
  public getPos(documentId){
    let i = 0;
    while (this.groups[i].id !== documentId){
      i = i + 1;
    }
    return i;
  }
}

