import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from '../app/app-routing.module';

import { AppComponent } from './app.component';
import { JsonJokesComponent } from '../data/json-jokes/json-jokes.component';
import { JokeAppComponent } from './joke-app/joke-app.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokePreviewComponent } from './joke-preview/joke-preview.component';
import { JokeModalComponent } from './joke-modal/joke-modal.component';
import { LoginComponent } from './login/login.component';
import { JokeFilterComponent } from './joke-filter/joke-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonJokesComponent,
    JokeAppComponent,
    JokeListComponent,
    JokePreviewComponent,
    JokeModalComponent,
    LoginComponent,
    JokeFilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
