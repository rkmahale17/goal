import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../Loader/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services';
import { Router } from '@angular/router';
import { AddUser } from '../../store/actions/user.actions';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-create-achievement',
  templateUrl: './create-achievement.component.html',
  styleUrls: ['./create-achievement.component.scss'],
})
export class CreateAchievementComponent implements OnInit {
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  get f() {
    return this.form.controls;
  }

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
    ]),
    lines: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.loaderService.showLoader('cAchieve');
    setTimeout(() => {
      this.loaderService.hideLoader('cAchieve');
    }, 1000);
  }

  submit() {
    // call service addAchievement
    this.apiService
      .addAchievement(localStorage.getItem('userId'), this.form.value)
      .subscribe((response) => {
        this.store.dispatch(new AddUser([response]));
        this.router.navigateByUrl('/Home');
      });
  }
}
