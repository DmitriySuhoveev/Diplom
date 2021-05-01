import { AuthService } from './modules/auth-module/auth-services/auth.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  condition: boolean;

  constructor(private authService: AuthService){}

  checking(){
    this.condition = this.authService.isLoggedIn();
  }
  ngDoCheck(): void {
    this.checking();
  }

}
