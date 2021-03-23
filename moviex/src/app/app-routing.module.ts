import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageShowComponent } from './components/homepage-show/homepage-show.component';
import { SingleShowComponent } from './components/single-show/single-show.component';
import { DashShowsComponent } from './dashboard/dash-shows/dash-shows.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageShowComponent},
  {path:'singleShow/:name',component:SingleShowComponent},

  {path:'dashboard/shows',component:DashShowsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
