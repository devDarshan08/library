import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatelibraryComponent } from './createlibrary/createlibrary.component';
import { YourlibraryComponent } from './yourlibrary/yourlibrary.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { RentbookComponent } from './rentbook/rentbook.component';
import { LibrarybooksComponent } from './librarybooks/librarybooks.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'allbooks',
    pathMatch:'full'
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'allbooks', 
    canActivate:[authGuard],
    component:AllbooksComponent
  },
  {
    path: 'createlibrary',
    canActivate:[authGuard],
    component: CreatelibraryComponent
  },
  {
    path:'yourlibrary',
    canActivate:[authGuard],
    component:YourlibraryComponent
  },
  {
    path:'librarybook',
    canActivate:[authGuard],
    component:LibrarybooksComponent
  },
  {
    path:'rentbook',
    canActivate:[authGuard],
    component:RentbookComponent
  },
  {
    path:'message',
    canActivate:[authGuard],
    component:MessageComponent
  },
  // {
  //   path:'**',
  //   redirectTo:'allbooks',
  //   pathMatch:'full',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
