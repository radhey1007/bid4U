import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ResportResolverService } from "./resport-resolver.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"],
  providers: [ResportResolverService]
})
export class ReportComponent implements OnInit {
  getFinalData: any = [];
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.GetFinalDataforQuizExam();
  }
  GetFinalDataforQuizExam = () => {
    this.actRoute.data.subscribe(data => {
      console.log(data.routeResolver);
    });
  };
}
