

import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from '../Loader/loader.service';
import { ApiService, AuthService } from 'src/app/services';
import { Router } from 'backend/node_modules/@types/express';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-create-goals',
    templateUrl: './createGoal.component.html',
    styleUrls: ['./createGoal.component.scss'],
})
export class CreateGoalComponent {
    @Input() label: string;
    arrowIcon = faGreaterThan;
    addIcon = faPlus;

    constructor(
        private loaderService: LoaderService
    ) { }

    get f() {
        return this.form.controls;
    }

    form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(10)]),
        description: new FormControl('', [Validators.required, Validators.minLength(20)]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        reminder: new FormControl('')

    });

    ngOnInit() {
        this.loaderService.showLoader('createGoal');
        setTimeout(() => {
            this.loaderService.hideLoader('createGoal');
        }, 1000);
    }

    submit() {
        // call service addAchievement
        debugger;
        this.form.value.goals = [];
       // let formShaloow = { ...this.form.value };
        delete this.form.value.email;
       // this.form.value.username = formShaloow.email;
        this.loaderService.showLoader('createGoal');
       // this.authService.register(this.form.value);
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
