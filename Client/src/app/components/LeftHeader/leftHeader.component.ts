

import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './leftHeader.component.html',
    styleUrls: ['./leftHeader.component.scss'],
})
export class LeftHeaderComponent {
    @Input() label: string;
    arrowIcon = faGreaterThan;
}
