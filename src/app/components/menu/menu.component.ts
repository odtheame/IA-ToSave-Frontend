import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public loginService: LoginService) { }

  ngOnInit() {
    const spanElement = document.querySelectorAll('.mat-mdc-list-item-unscoped-content');
    spanElement.forEach((spanElement) => {
      const elemento = spanElement as HTMLElement;
      elemento.style.display = 'flex';
      elemento.style.justifyContent = 'start';
      elemento.style.alignItems = 'center';
      elemento.style.color = 'antiquewhite';
    });
  }
 

  cerrar() {
    localStorage.setItem('login', 'logout')
    this.loginService.login.next("login");
  }

}
