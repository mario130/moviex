import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/+auth/login/login.component';
import { SignUpComponent } from './components/+auth/signUp/signUp.component';
import { Err404CompoComponent } from './components/err404-compo/err404-compo.component';
import { HomepageShowComponent } from './components/homepage-show/homepage-show.component';
import { SingleShowComponent } from './components/single-show/single-show.component';
import { DashAdminPorfileComponent } from './dashboard/dash-admin-porfile/dash-admin-porfile.component';
import { DashParentComponent } from './dashboard/dash-parent/dash-parent.component';
import { DashUsersComponent } from './dashboard/dash-users/dash-users.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageShowComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignUpComponent},
  {path:'singleShow/:name',component:SingleShowComponent},
  {path:'dashboard',component:DashParentComponent,
  children:[
    {path:'users', component:DashUsersComponent},
    {path:'admin',component:DashAdminPorfileComponent}
  ]
}, 
  {path: '404', component: Err404CompoComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
