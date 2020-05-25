import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { LandingComponent } from './components/Landing/landing.component';
import { CreateAchievementComponent } from './components/create-achievement/create-achievement.component';
import { SignUpComponent } from './components/SignUp/SignUp.component';
import { LoginPageComponent } from './components/LoginPage/login-page.component';
import { DemoComponent } from './components/ComponentDemo/demo.componet';
import { AuthGuardService } from './services';
import { CreateGoalComponent } from './components/CreateGoal/createGoal.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuardService]  },
  { path: 'AddAchievement', component: CreateAchievementComponent, canActivate: [AuthGuardService]  },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'LocalComponent', component: DemoComponent },
  { path: 'CreateGoal', component: CreateGoalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
