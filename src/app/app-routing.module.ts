import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/Home.component';
import { LandingComponent } from './components/Landing/Landing.component';
import { CreateAchievementComponent } from './components/create-achievement/create-achievement.component';
import { SignUpComponent } from './components/SignUp/SignUp.component';
import { LoginPageComponent } from './components/LoginPage/login-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: LandingComponent },
  { path: 'AddAchievement', component: CreateAchievementComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Login', component: LoginPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
