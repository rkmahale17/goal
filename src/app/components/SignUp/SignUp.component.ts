import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../Loader/Loader.service';
import { ApiService } from '../ApiService/Api.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./SignUp.component.html",
  styleUrls: ["./SignUp.component.scss"],
})
export class SignUpComponent implements OnInit {
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }

  form = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    compony: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
  });

  ngOnInit() {
    this.loaderService.showLoader("signUp");
    setTimeout(() => {
      this.loaderService.hideLoader("signUp");
    }, 1000);
  }

  submit() {
    // call service addAchievement
    this.form.value.achievement = [];
    this.form.value.created_date = Date.now();
    this.loaderService.showLoader("signUp");
    this.apiService.createUser(this.form.value).subscribe((response) => {
      if (response._id) {
        localStorage.setItem("userId", response._id);
        this.router.navigateByUrl("/Home");
      } else {
        alert("Eror in creating user");
      }
      this.loaderService.hideLoader("signUp");
    });
  }
}
