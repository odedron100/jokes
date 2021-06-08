import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from '../app/app-routing.module';

import { AppComponent } from './app.component';
import { JsonJokesComponent } from '../data/json-jokes/json-jokes.component';
import { JokeAppComponent } from './joke-app/joke-app.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonJokesComponent,
    JokeAppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
