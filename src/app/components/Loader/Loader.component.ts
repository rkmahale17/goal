import { Component, Input, OnInit } from "@angular/core";
import { LoaderService } from "./loader.service";
import { Loader } from "./loader.model";

@Component({
  selector: "app-loader",
  templateUrl: "./Loader.component.html",
  styleUrls: ["./Loader.component.scss"],
})
export class LoaderComponent implements OnInit {
  @Input() public id: string = "global";
  public show: boolean;

  constructor(private loaderService: LoaderService) {}

  public ngOnInit(): void {
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      this.show = (this.id === response.id) && response.status;
    });
  }
}
