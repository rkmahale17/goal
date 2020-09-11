

import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'goal-header',
    templateUrl: './goalHeader.component.html',
    styleUrls: ['./goalHeader.component.scss'],
})
export class GoalHeaderComponent {
    @Input() label: string;
    @Input() goalTitle: string;
    arrowIcon = faGreaterThan;
    editIcon = faEdit;
    constructor() {
    }
    
}
