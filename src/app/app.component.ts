import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IA-ToSave';

  constructor(public loginService: LoginService) { }

  login: String = "login";

  ngOnInit(): void {
    if (localStorage.getItem('login') === null) {
      localStorage.setItem('login', 'logout');
    }
    if (this.loginService.login.value == "login") {
      this.loginService.login.next("login");
    } else {
      this.loginService.login.next("logout");
    }
    this.loginService.login.subscribe(value => {
      this.login = value;
    })
  }

}
