import { PopUpModule } from './shares/components/pop-up/pop-up.module';
import { MainPageService } from './modules/mainPage-module/mainPage-service/main-page.service';
import { MainPageModule } from './modules/mainPage-module/main-page.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModuleModule } from './modules/auth-module/auth.module';
import { AuthService } from './modules/auth-module/auth-services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollingModule } from '@angular/cdk/scrolling';



export function tokenGetter(): any {
  return localStorage.getItem('JWT_TOKEN');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AuthModuleModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    }),
    BrowserAnimationsModule,
    MainPageModule,
    ScrollingModule,

    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    NgbModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    MainPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
