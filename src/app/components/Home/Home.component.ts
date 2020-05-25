import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../Loader/loader.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { IUser } from 'src/app/models/users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo: IUser;
  public showCreateAchievement = true;
  public achievemets = [];
  public showGoals = false;
  constructor(
    private loaderService: LoaderService,
    private router: Router,
    private authService: AuthService,

  ) {}

  ngOnInit() {
    this.loaderService.showLoader('landing');
    
    // this.authService.login();
    setTimeout(() => {
      this.loaderService.hideLoader('landing');
      this.userInfo = this.authService.getUserInfo();
      if (this.userInfo.goals.length > 0) {
        this.showGoals = true;
      }
      console.log(this.userInfo);
      // this.showCreateAchievement = !this.userInfo.achievement.length ? true : false;

    }, 2000);


  }
}
