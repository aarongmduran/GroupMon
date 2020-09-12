import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../API/services/auth.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/internal/Observable';

export interface ModalData {
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(public authService: AuthService,
    private storage: AngularFireStorage,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;


  pass:boolean = false;
  prof:boolean = false;
  del:boolean = false;

  @ViewChild('imageUser') inputImageUser: ElementRef;


  // Verifica si los botones han sido pulsados para mostrar el resto.
  passTog(){
    if (this.pass == false){
      this.pass = true;
    }
    else{
      this.pass = false;
    }
  }
  delToggle(){
    if (this.del == false){
      this.del = true;
    }
    else{
      this.del = false;
    }
  }

  // Llama a eliminar el usuario.
  public eliminarUsuario(){
    this.authService.DeleteUser();
    this.dialogRef.close();
  }
}
