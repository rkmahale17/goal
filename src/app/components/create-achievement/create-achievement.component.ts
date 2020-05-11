import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../Loader/Loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../ApiService/Api.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-create-achievement",
  templateUrl: "./create-achievement.component.html",
  styleUrls: ["./create-achievement.component.scss"],
})
export class CreateAchievementComponent implements OnInit {
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }

  form = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(20)]),
    category: new FormControl("", [Validators.required]),
    description: new FormControl("", [
      Validators.required,
      Validators.minLength(40),
    ]),
    lines: new FormControl("", [Validators.required]),
  });

  ngOnInit() {
    this.loaderService.showLoader("cAchieve");
    setTimeout(() => {
      this.loaderService.hideLoader("cAchieve");
    }, 1000);
  }

  submit() {
    // call service addAchievement
    this.apiService
      .addAchievement(localStorage.getItem("userId"), this.form.value)
      .subscribe((response) => {
       this.router.navigateByUrl("/Home");

      });
    
  }
}
