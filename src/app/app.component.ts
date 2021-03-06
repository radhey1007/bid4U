import { Component, HostListener } from "@angular/core";
import { ApiproviderService } from "./shared/services/apiprovider.service";
import { CommonService } from "./shared/common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Bid4u";
  original: any = document.title;

  constructor(public sharedService: CommonService) {}

  @HostListener("window:focus", ["$event"])
  public onFocus(): void {
    document.title = this.original;
  }

  @HostListener("window:blur", ["$event"])
  public onBlur(): void {
    document.title = "We are misssing you :)";
  }
}
