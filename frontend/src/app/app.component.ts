import { AuthService } from './modules/auth-module/auth-services/auth.service';
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  condition: boolean;

  constructor(private authService: AuthService, private router: Router){}

  ngDoCheck(): void {
    this.checking();
  }

  checking(): void{
    this.condition = this.authService.isLoggedIn();
  }

  navigateToSearch(): void{
    this.router.navigate(['/list']);
  }

  toMain(): void {
    this.router.navigate(['/main']);
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/auth/authorization']);
  }

}
