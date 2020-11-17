import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User = {
    userName: '',
    password: '',
  }
  EnvData: { production: boolean; userName: string; password: string; };

  constructor(private router: Router,) {
   this.EnvData = environment;
   }

  ngOnInit() {
  }
  login() {
    if (this.EnvData.userName == this.User.userName && this.EnvData.password == this.User.password) {
      
      this.router.navigateByUrl('/home');
    }
    else {
      console.log('asdsadsad')
    }
  }
}
