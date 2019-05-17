import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component'
import { ResetPasswordComponent } from './component/reset-password/reset-password.component'
import { ForgotComponent } from './component/forgot/forgot.component'
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
const routes: Routes = [
 
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent

  },
  {
    path: 'resetpassword/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'',
        component:AddNoteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
