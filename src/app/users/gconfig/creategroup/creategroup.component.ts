import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupsService } from '../../../API/content/groups.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

export interface ModalData {
    nombre: string;
    descripcion: string;
    photo: string;
    grupos: null;
}

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.scss']
})


export class CreategroupComponent implements OnInit {

  @ViewChild('imageUser') inputImageUser: ElementRef;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  constructor(
    public afAuth: AngularFireAuth,
    private storage: AngularFireStorage,
    public groupService: GroupsService,
    public dialogRef: MatDialogRef<CreategroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  // Sube la foto a Firebase
  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `groups/group_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

  // Crea un nuevo grupo con las características introducidas.
  public newGroup(nombrePuesto: string, description: string, photoURL: string, groupColor) {
    const user = this.afAuth.auth.currentUser.email;
    const users: string[] = [user];
    const nameuser = this.afAuth.auth.currentUser.displayName;
    const nameusers: string[] = [nameuser];
    const dineroIntrod:number = 0;
    const movements = ['El grupo ha sido creado'];
    const newGroup = {nombre: nombrePuesto, descripcion: description,  usuarios: users, dinero: dineroIntrod,
      usuariosNombre: nameusers, photoGroup: photoURL, grupoColor: groupColor, movimientos: movements};
    this.groupService.createGroup(newGroup);
  }
}
