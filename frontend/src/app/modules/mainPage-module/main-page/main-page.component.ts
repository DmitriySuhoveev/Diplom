import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth-module/auth-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/auth/authorization']);
  }

}
