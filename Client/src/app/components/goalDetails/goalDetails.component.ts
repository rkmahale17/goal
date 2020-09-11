

import { AuthService, ApiService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { LoaderService } from '../Loader/loader.service';


@Component({
    selector: 'app-goal-details',
    templateUrl: './goalDetails.component.html',
    styleUrls: ['./goalDetails.component.scss'],
})
export class GoalDetailsComponent {

    goalId: string;
    goalDetails: any;
    phaseDetails: any;
    isEditMode = false;
    constructor(private route: ActivatedRoute, private authService: AuthService, private apiService: ApiService,
                private loaderService: LoaderService) {
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.loaderService.showLoader('goalDetails');
        setTimeout(() => {
            this.route.paramMap.subscribe((params) => {
                this.goalId = params.get('goalId');
                const details = this.authService.getUserInfo();
                if (details && details.goals && details.goals.length > 0) {
                    const goals = details.goals;
                    const goal = goals.filter((item) => {
                        return item._id === this.goalId;
                    });
                    this.apiService.getPhase(this.authService.getUserId(), this.goalId).subscribe((result) => {
                        this.phaseDetails = result;
                    });
                    this.goalDetails = goal[0];
                    this.loaderService.hideLoader('goalDetails');
                }
            });
        }, 2000);
    }
}
