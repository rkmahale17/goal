import { Component, OnInit } from '@angular/core';
import { LoaderService } from "../Loader/Loader.service";
import { ApiService } from '../ApiService/Api.service';
import { Router } from '@angular/router';
import { userResponse } from '../CommonServices/Common.Interface';

@Component({
  selector: "app-landing",
  templateUrl: "./Landing.component.html",
  styleUrls: ["./Landing.component.scss"],
})
export class LandingComponent implements OnInit {

  public showCreateAchievement = false;
  public achievemets = [];
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loaderService.showLoader("landing");
    setTimeout(() => {
      this.loaderService.hideLoader("landing");
    }, 1000);

    const userId = localStorage.getItem("userId");
    if (userId !== "undefined") {
      this.apiService
        .getUserInfo(userId)
        .subscribe((response: userResponse) => {
          if (userId === response._id) {
            this.showCreateAchievement = !response.achievement.length ? true : false;
            this.achievemets = response.achievement;
            this.achievemets.push(response.achievement[0]);
          }
        });
    }
  }
}
