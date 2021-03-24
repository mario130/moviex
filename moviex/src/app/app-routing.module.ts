import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404CompoComponent } from './components/err404-compo/err404-compo.component';
import { HomepageShowComponent } from './components/homepage-show/homepage-show.component';
import { SingleShowComponent } from './components/single-show/single-show.component';
import { DashAdminPorfileComponent } from './dashboard/dash-admin-porfile/dash-admin-porfile.component';
import { DashShowsComponent } from './dashboard/dash-shows/dash-shows.component';
import { DashUsersComponent } from './dashboard/dash-users/dash-users.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageShowComponent},
  {path:'singleShow/:name',component:SingleShowComponent},
  {path:'dashboard/shows',component:DashShowsComponent},
  {path:'dashboard/users',component:DashUsersComponent},
  {path:'dashboard/admin',component:DashAdminPorfileComponent},
  {path: '404', component: Err404CompoComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
