import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { GroupsService } from '../../../API/content/groups.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from '../creategroup/creategroup.component';

@Component({
  selector: 'app-groupusers',
  templateUrl: './groupusers.component.html',
  styleUrls: ['./groupusers.component.scss']
})
export class GroupusersComponent implements OnInit {

  constructor(
  public afAuth: AngularFireAuth,
  private storage: AngularFireStorage,
  public groupService: GroupsService,
  public dialogRef: MatDialogRef<GroupusersComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {}

  public groups = this.data.grupos;

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

  // Añade un nuevo usuario al grupo.
  public newUser(documentId, username, mail){
    const pos = this.getPos(documentId);
    if (this.groups[pos].data.usuarios.includes(mail) === false && username != null && mail != null){
      this.groups[pos].data.usuarios.push(mail);
      this.groups[pos].data.usuariosNombre.push(username);
      const data = {
        usuarios: this.groups[pos].data.usuarios,
        usuariosNombre: this.groups[pos].data.usuariosNombre
      };
      this.groupService.updateGroup(this.groups[pos].id, data);
    }
    else{
      alert('Ese usuario ya pertenece al grupo');
    }
  }

  // Coge la posición en el array de grupos por un id.
  public getPos(documentId){
    let i = 0;
    while (this.groups[i].id !== documentId){
      i = i + 1;
    }
    return i;
  }

  // Recoge los usuarios de un grupo.
  public getUsuariosGrupo(){
    const pos = this.getPos(this.data.id);
    return this.groups[pos].data.usuariosNombre;
  }

}
