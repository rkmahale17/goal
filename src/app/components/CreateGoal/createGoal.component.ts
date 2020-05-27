

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
        private loaderService: LoaderService,
        private apiService: ApiService,
        private authservice: AuthService
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
        this.loaderService.showLoader('createGoal');
        this.apiService.createGoal(this.authservice.getUserId(), this.form.value).subscribe((result) => {
            console.log(result);
        });
    }
}
