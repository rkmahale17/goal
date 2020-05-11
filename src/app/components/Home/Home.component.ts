import { Component } from "@angular/core";
import { LoaderService } from "../Loader/Loader.service"
import { ApiService } from '../ApiService/Api.service';
import { userResponse } from '../CommonServices/Common.Interface';
import { Router } from "@angular/router";

@Component({
  selector: "Home",
  templateUrl: "Home.component.html",
  styleUrls: ["Home.component.scss"],
})
export class HomeComponent {
  feature = ["Thought Reminder", "Share Pamyat", "Daily Log", "Categorization"];

  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit() {
    //checking user is present or not
    const userId = localStorage.getItem("userId");
    if (userId !== "undefined") {
      this.apiService
        .getUserInfo(userId)
        .subscribe((repsonse: userResponse) => {
          if (userId === repsonse._id) {
            this.router.navigateByUrl("/Home");
          }
        });
    } else {
      alert("Plz Sign In");
    }
  }

  hideLoader() {
    this.loaderService.hideLoader("home");
  }
}
