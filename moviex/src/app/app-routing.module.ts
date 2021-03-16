import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageShowComponent } from './components/homepage-show/homepage-show.component';

const routes: Routes = [
  {path: ':pageNum', component: HomepageShowComponent},
  {path: '', redirectTo: '/1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
