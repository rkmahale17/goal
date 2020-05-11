import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./components/Toolbar/Toolbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HomeComponent } from "./components/Home/Home.component";
import { LoaderComponent } from "./components/Loader/Loader.component";


import { LoaderService } from "./components/Loader/Loader.service";
import { LandingComponent } from "./components/Landing/Landing.component";
import { CreateAchievementComponent } from './components/create-achievement/create-achievement.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from './components/ApiService/Api.service';
import { HttpClientModule } from "@angular/common/http";
import { SignUpComponent } from './components/SignUp/SignUp.component';
import { LoginPageComponent } from './components/LoginPage/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LoaderComponent,
    LandingComponent,
    CreateAchievementComponent,
    SignUpComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoaderService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
