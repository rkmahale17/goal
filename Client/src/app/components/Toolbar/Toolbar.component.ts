import { Component } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from 'src/app/services';


@Component({
  selector: "Toolbar",
  templateUrl: "./Toolbar.component.html",
  styleUrls: ["./Toolbar.component.scss"],
})
export class ToolbarComponent {
  title = "Toolbar";
  menu_icon = faBars;
  close_icon = faWindowClose;
  menu = [
    { name: "ABOUT US", url: "/Home" },
    { name: "CONTACT US", url: "/Home" },
    { name: "SUPPORT US", url: "/Home" }

  ]


  constructor(private route: Router, private store: Store<AppState>,private authService:AuthService){}
  showMobileNavBar: boolean = false;
  isLogin() {
    return !this.authService.isAuthenitcated();
  }

  logout() {
    this.authService.logout();
//    this.store.dispatch(new RemoveUser([{}]));
  }

}
