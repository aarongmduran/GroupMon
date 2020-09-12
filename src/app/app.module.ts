import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Design stuff
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';


// Componentes de la gestión de usuarios
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './users/profile/profile.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { GiveInfoComponent } from './users/give-info/give-info.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Auth service
import { AuthService } from './API/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagingService } from './API/services/messaging.service';

// Big components
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { GroupsComponent } from './users/groups/groups.component';
import { CreategroupComponent } from './users/gconfig/creategroup/creategroup.component';
import { GroupusersComponent } from './users/gconfig/groupusers/groupusers.component';
import { GroupcontentComponent } from './users/gconfig/groupcontent/groupcontent.component';







@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SigninComponent,
    LandingComponent,
    SignupComponent, FooterComponent,
    GiveInfoComponent, NavbarComponent, NavbarUserComponent, EditProfileComponent,
    GroupsComponent, CreategroupComponent, GroupusersComponent, GroupcontentComponent
  ],
  imports: [
    BrowserModule, MatSelectModule, AngularFireMessagingModule,
    AppRoutingModule, MatButtonModule, MatCheckboxModule, AngularFireAuthModule, MatChipsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, MatCardModule, FlexLayoutModule,
    BrowserAnimationsModule, MatProgressSpinnerModule, MatDialogModule,
    ReactiveFormsModule, FormsModule, MatInputModule, MatIconModule, AngularFireStorageModule, MatToolbarModule
  ],
  providers: [MessagingService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
