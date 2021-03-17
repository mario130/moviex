import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleShowComponent } from './components/single-show/single-show.component';

const routes: Routes = [
  {path:'singleShow/:id',component:SingleShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
