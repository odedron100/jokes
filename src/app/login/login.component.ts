import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    username:'',
    password:''
  }

  eroor = null
  constructor(private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit(): void {
  }

   modelChangeUsername(e) {
      this.user.username = e;
    }

    modelChangePassword(e) {
      this.user.password = e;
    }

  onLogin (){
    if(!this.user.username || !this.user.password){

      return this.eroor = 'Username or Password missing'
    }
    this.router.navigateByUrl(`joke`);
  }

}
