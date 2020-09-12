import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { ProfileComponent } from './users/profile/profile.component';
import { GiveInfoComponent } from './users/give-info/give-info.component';

import { AuthGuard } from './API/services/auth.guard';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { GroupsComponent } from './users/groups/groups.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'giveInfo', component: GiveInfoComponent},
  { path: 'register', component: SignupComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
