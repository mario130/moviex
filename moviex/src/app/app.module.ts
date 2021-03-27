import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLComponent } from './graph-ql/graph-ql.component';
import { HomepageShowComponent } from './components/homepage-show/homepage-show.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleShowComponent } from './components/single-show/single-show.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { Err404CompoComponent } from './components/err404-compo/err404-compo.component';
import { LoginComponent } from './components/+auth/login/login.component';
import { SignUpComponent } from './components/+auth/signUp/signUp.component';
import { DashUsersComponent } from './dashboard/dash-users/dash-users.component';
import { DashAdminPorfileComponent } from './dashboard/dash-admin-porfile/dash-admin-porfile.component';
import { DashSideBarComponent } from './dashboard/dash-side-bar/dash-side-bar.component';
import { DashParentComponent } from './dashboard/dash-parent/dash-parent.component';
import { UserListComponent } from './components/+auth/user-list/user-list.component';
import { MustMatchDirective } from './_helpers/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphQLComponent,
    HomepageShowComponent,
    FooterComponent,
    MoviesComponent,
    SingleShowComponent,
    SidebarComponent,
    MovieComponent,
    Err404CompoComponent,
    LoginComponent,
    SignUpComponent,
    DashUsersComponent,
    DashAdminPorfileComponent,
    DashSideBarComponent,
    DashParentComponent,
    UserListComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
