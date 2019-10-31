import { Component, OnInit, Input } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.css"]
})
export class ChangepasswordComponent implements OnInit {
  @Input() role: string = "";
  constructor(public sharedService: CommonService) {}

  ngOnInit() {}
}
