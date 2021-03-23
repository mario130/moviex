import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404CompoComponent } from './components/err404-compo/err404-compo.component';
import { HomepageShowComponent } from './components/homepage-show/homepage-show.component';
import { SingleShowComponent } from './components/single-show/single-show.component';
import { DashShowsComponent } from './dashboard/dash-shows/dash-shows.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageShowComponent},
  {path:'singleShow/:name',component:SingleShowComponent},
  {path:'dashboard/shows',component:DashShowsComponent},
  {path: '404', component: Err404CompoComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
