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
import { DashShowsComponent } from './dashboard/dash-shows/dash-shows.component';
import { Err404CompoComponent } from './components/err404-compo/err404-compo.component';

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
    DashShowsComponent,
    Err404CompoComponent
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
