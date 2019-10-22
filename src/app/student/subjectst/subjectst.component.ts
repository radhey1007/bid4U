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
  constructor(
    private actRoute: ActivatedRoute,
    private sharedService: CommonService
  ) {}

  ngOnInit() {
    this.bindSubjectList();
  }
  bindSubjectList = () => {
    this.actRoute.data.subscribe(data => {
      console.log(data);
    });
  };
}
