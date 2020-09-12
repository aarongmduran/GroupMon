import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/API/services/auth.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-give-info',
  templateUrl: './give-info.component.html',
  styleUrls: ['./give-info.component.scss']
})
export class GiveInfoComponent implements OnInit {

  constructor(public authService: AuthService, private storage: AngularFireStorage) {
  }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

@ViewChild('imageUser') inputImageUser: ElementRef;

  ngOnInit(): void {
  }

  // Sube a Firebase la foto introducida.
  onUpload(e){
    //console.log(e);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

}