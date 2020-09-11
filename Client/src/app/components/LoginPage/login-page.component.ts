import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../Loader/loader.service';
import { ApiService } from '../../services';
import { Router } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/users.model';
import { AddUser } from '../../store/actions/user.actions';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userInfo: Observable<[IUser]>;
  constructor(private loaderService: LoaderService,
              private apiService: ApiService,
              private authService: AuthService,
              private router: Router, private store: Store<AppState>
  ) {
    this.userInfo = store.select('user');
  }
  get f() {
    return this.form.controls;
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  submit() {
    // call service addAchievement
    this.loaderService.showLoader();
    this.authService.login(this.form.value, this.loaderService);

    // this.apiService.login(this.form.value).subscribe((response: any) => {

    //   if (response._id) {
    //     localStorage.setItem("userId", response._id);
    //     this.router.navigateByUrl("/Home");
    //     this.store.dispatch(new AddUser([response]));      } else {
    //     alert("Eror in creating user");
    //   }
    //   this.loaderService.hideLoader("login");
    // });
  }
}
