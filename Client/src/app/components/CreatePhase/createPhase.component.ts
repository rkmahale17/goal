import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from '../Loader/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crearte-phase',
    templateUrl: './createPhase.component.html',
    styleUrls: ['./createPhase.component.scss'],
})
export class CreatePhaseComponent {


    @Input() isShow = false;
    arrowIcon = faGreaterThan;
    inputConfig;

    constructor(private loaderService: LoaderService, private apiService: ApiService, private router: Router
    ) {

    }

    get f() {
        return this.form.controls;
    }

    form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(10)]),
        description: new FormControl('', [Validators.required, Validators.minLength(20)]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required])

    });

    ngOnInit() {
        this.loaderService.showLoader('createPhase');
        setTimeout(() => {
            this.loaderService.hideLoader('createPhase');
            this.inputConfig = this.apiService.getEditingPhase();
            this.initPhaseDetails();
        }, 1000);
    }

    initPhaseDetails() { 
        const { description,
            endDate,
            startDate,
            title } = this.inputConfig;
        
        this.form.patchValue({
            description,
            endDate,
            startDate,
            title
        });
    }

    submit() {
        this.apiService.setEditingPhase(this.form.value);
        this.router.navigateByUrl('/CreateGoal')

    }
}



