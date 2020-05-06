import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "../components/Toolbar/Toolbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HomeComponent } from "../components/Home/Home.component";

@NgModule({
  declarations: [AppComponent, ToolbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
