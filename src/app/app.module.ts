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
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
