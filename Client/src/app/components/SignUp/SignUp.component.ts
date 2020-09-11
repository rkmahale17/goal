import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../Loader/loader.service';
import { Router } from "@angular/router";
import { ApiService, AuthService } from 'src/app/services';


@Component({
  selector: "app-sign-up",
  templateUrl: "./SignUp.component.html",
  styleUrls: ["./SignUp.component.scss"],
})
export class SignUpComponent implements OnInit {
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  get f() {
    return this.form.controls;
  }

  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required, Validators.minLength(10)])
  });

  ngOnInit() {
    this.loaderService.showLoader("signUp");
    setTimeout(() => {
      this.loaderService.hideLoader("signUp");
    }, 1000);
  }

  submit() {
    // call service addAchievement
    debugger;
    this.form.value.goals = [];
    let formShaloow = { ...this.form.value };
    delete this.form.value.email;
    this.form.value.username = formShaloow.email;
    this.loaderService.showLoader("signUp");
    this.authService.register(this.form.value);
    // this.apiService.registerUser(this.form.value).subscribe((result) => {
    //   localStorage.setItem('jwt_token', result.token);
    //   this.loaderService.hideLoader("signUp");
    //   this.router.navigateByUrl["/Home"]
    //   // if (response._id) {
    //   //   localStorage.setItem("userId", response._id);
    //   //   this.router.navigateByUrl("/Home");
    //   // } else {
    //   //   alert("Eror in creating user");
    //   // }
    //   // this.loaderService.hideLoader("signUp");
    // });
  }
}
