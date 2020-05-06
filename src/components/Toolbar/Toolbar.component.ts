import { Component } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "Toolbar",
  templateUrl: "./Toolbar.component.html",
  styleUrls: ["./Toolbar.component.scss"],
})
export class ToolbarComponent {
  title = "Toolbar";
  menu_icon = faBars;
  close_icon = faWindowClose;

  showMobileNavBar: boolean = false;
}
