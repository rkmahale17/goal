import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/Toolbar/Toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './components/Landing/landing.component';
import { LoaderComponent } from './components/Loader/loader.component';
import { CreateAchievementComponent } from './components/create-achievement/create-achievement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/SignUp/SignUp.component';
import { LoginPageComponent } from './components/LoginPage/login-page.component';
import { StoreModule } from '@ngrx/store';
import { DemoComponent } from './components/ComponentDemo/demo.componet';


import { HomeComponent } from './components/Home/home.component';
import { CreateGoalComponent } from './components/CreateGoal/createGoal.component';



// Services
import { JwtModule } from '@auth0/angular-jwt';

import { LoaderService } from './components/Loader/loader.service';
import { LeftHeaderComponent } from './components/LeftHeader/leftHeader.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { reducer } from './store/reducers/user.reducer';
import { ApiService, AuthService, AuthGuardService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LandingComponent,
    LoaderComponent,
    HomeComponent,
    CreateAchievementComponent,
    SignUpComponent,
    LoginPageComponent,
    DemoComponent,
    LeftHeaderComponent,
    NavbarComponent,
    CreateGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: reducer
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('jwt_token');
        },
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],
  providers: [LoaderService, ApiService, AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
