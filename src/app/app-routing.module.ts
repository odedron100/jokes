import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokeAppComponent} from '../app/joke-app/joke-app.component'
import {LoginComponent} from '../app/login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'joke', component: JokeAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
