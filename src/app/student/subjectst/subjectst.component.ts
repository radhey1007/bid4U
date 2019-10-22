import { SubjectresolverService } from "./subjectresolver.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "src/app/shared/common.service";

@Component({
  selector: "app-subjectst",
  templateUrl: "./subjectst.component.html",
  styleUrls: ["./subjectst.component.css"],
  providers: [SubjectresolverService]
})
export class SubjectstComponent implements OnInit {
  subjectList: any = [];
  constructor(
    private actRoute: ActivatedRoute,
    private sharedService: CommonService
  ) {}

  ngOnInit() {
    this.bindSubjectList();
  }
  bindSubjectList = () => {
    this.actRoute.data.subscribe(data => {
      this.subjectList = data.routeResolver;
      console.log(data);
    });
  };
  getRandomColor = () => {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return "#" + ("000000" + color).slice(-6);
  };
}
