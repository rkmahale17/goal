import { Component, Input, EventEmitter, Output } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from 'src/app/services';


@Component({
    selector: "nav-bar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
    title = "Toolbar";
    menu_icon = faBars;
    close_icon = faWindowClose;
    arrowForward  = faArrowCircleRight;
    @Input() menu = [];
    @Output() closeNavBar: EventEmitter<any> = new EventEmitter();

    @Input() showMobileNavBar = false;
    constructor(private route: Router, private store: Store<AppState>, private authService: AuthService) { }
    isLogin() {
        return !this.authService.isAuthenitcated();
    }
    logout() {
        this.authService.logout();
        //    this.store.dispatch(new RemoveUser([{}]));
    }

    close() {
        this.closeNavBar.emit(null);    }

}
