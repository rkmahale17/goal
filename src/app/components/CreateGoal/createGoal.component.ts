

import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from '../Loader/loader.service';
import { ApiService, AuthService } from 'src/app/services';
import { Router } from '@angular/router';
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
    showPhaseModal = false;
    inputConfig;

    constructor(
        private loaderService: LoaderService,
        private apiService: ApiService,
        private authservice: AuthService,
        private router: Router
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
            this.inputConfig = this.apiService.getEditingGoal();
            this.initGoalDetails();
        }, 1000);
    }
    goToDemo() {
        this.router.navigate(['/Demo'], { queryParams: { 'name': [{ name: "shame" }, { name: "shame" }, { name: "shame" }, { name: "shame" }] }, skipLocationChange: true });
        // this.router.navigate(['/Demo', { demo: 'demo' }]);
    }
    goToPhase() {
        this.apiService.setEditingGoal(this.form.value);
        this.router.navigate(['CreatePhase'], { state: { example: 'bar' } });


        // [routerLink] = " ['/CreatePhase']"
    }
    initGoalDetails() {

        const { description,
            endDate,
            reminder,
            startDate,
            title } = this.inputConfig;
        
        this.form.patchValue({
            description,
            endDate,
            reminder,
            startDate,
            title
        });
        // this.form.value = this.inputConfig;
    }

    submit() {
        this.loaderService.showLoader('createGoal');

        //crete goal
        this.apiService.createGoal(this.authservice.getUserId(), this.form.value).subscribe((result:any) => {
            if (result && result._id) {
                this.apiService.createPhase(this.authservice.getUserId(), result._id, this.apiService.getEditingPhase())
                    .subscribe((phaseResult) => {
                        console.log("result");
                    })
            }
        });
    }
}
