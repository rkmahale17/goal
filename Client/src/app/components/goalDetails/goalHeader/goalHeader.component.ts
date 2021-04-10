

import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    arrowIcon = faGreaterThan;
    editIcon = faEdit;
    constructor() {
    }

    onEdit() {
        this.edit.emit(null);
    }
    onDelete() {
        this.delete.emit(null);
    }
}
