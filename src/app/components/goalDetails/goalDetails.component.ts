

import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-goalDetails',
    templateUrl: './goalDetails.component.html',
    styleUrls: ['./goalDetails.component.scss'],
})
export class GoalDetailsComponent {

    goalId: string;
    goalDetails: any;

    constructor(private route: ActivatedRoute, private authService: AuthService) {

    }

    ngOnInit() {
        console.log('inside getails');
        this.route.paramMap.subscribe( (params) => {
            this.goalId = params.get('goalId');
            const details = this.authService.getUserInfo();
            if (details && details.goals && details.goals.length > 0) {
                const goals = details.goals;
                this.goalDetails = goals.filter((item) => {
                return item._id == this.goalId
                });
                console.log(this.goalDetails);
            }
        });
    }

}
