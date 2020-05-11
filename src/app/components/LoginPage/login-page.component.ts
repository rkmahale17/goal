import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../Loader/Loader.service';
import { ApiService } from '../ApiService/Api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router) { }
  get f() {
    return this.form.controls;
  }
  form = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
  }

  submit() {
    // call service addAchievement
    this.loaderService.showLoader("login");
    this.apiService.login(this.form.value).subscribe((response:any) => {
      if (response.userId) {
        localStorage.setItem("userId", response.userId);
        this.router.navigateByUrl("/Home");
      } else {
        alert("Eror in creating user");
      }
      this.loaderService.hideLoader("login");
    });
  }
}
