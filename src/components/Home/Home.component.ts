import { Component } from "@angular/core";

@Component({
  selector: "Home",
  templateUrl: "./Home.component.html",
  styleUrls: ["./Home.component.scss"],
})
export class HomeComponent {
  feature = ["Thought Reminder", "Share Pamyat", "Daily Log", "Categorization"];
}
