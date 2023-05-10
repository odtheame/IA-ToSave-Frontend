import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  addressForm = new FormGroup({
    usr: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });

  constructor(public loginService: LoginService) { }

  usr = "";
  pass = "";
  onSubmit(): void {
    this.usr = this.addressForm.controls["usr"].value;
    this.pass = this.addressForm.controls["pass"].value;
    if (this.usr === "username" && this.pass === "1234") {
      Swal.fire(
        '¡Muy bien!',
        'Has iniciado sesión correctamente',
        'success'
      )
      localStorage.setItem('login', 'login')
      this.loginService.login.next("login");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Datos de inicio de sesión fallidos',
        footer: 'Intente con: usuario: username y contraseña: 1234'
      })
    }
  }
}
