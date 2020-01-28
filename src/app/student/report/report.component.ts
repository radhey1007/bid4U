import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ResportResolverService } from "./resport-resolver.service";
import { StorageService } from "src/app/shared/storage.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"],
  providers: [ResportResolverService]
})
export class ReportComponent implements OnInit {
  getFinalData: any = [];
  examInfo: any = {};
  constructor(
    public storage: StorageService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.GetFinalDataforQuizExam();
  }
  GetFinalDataforQuizExam = () => {
    this.actRoute.data.subscribe(data => {
     
      let examdata = this.storage.getUserSettings("examinfo");
      this.examInfo = examdata;
      this.getFinalData = data.routeResolver;
    });
  };
}
