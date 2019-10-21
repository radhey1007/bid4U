import { HomeresolverService } from "./../resolvers/homeresolver.service";
import { Component, OnInit } from "@angular/core";
import { CommonService } from "../shared/common.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [HomeresolverService]
})
export class HomeComponent implements OnInit {
  constructor(
    public sharedService: CommonService,
    private actRoute: ActivatedRoute
  ) {}
  data = {
    job: [],
    admit: [],
    result: []
  };
  ngOnInit() {
    this.receiveData();
  }
  receiveData = () => {
    this.actRoute.data.subscribe(data => {
      
      if (data.routeResolver) {
        let _res: any = data.routeResolver;
        let dataJob = [
          _res.reduce(
            (a, c) => (
              (a[c.jobAlertFlag] = (a[c.jobAlertFlag] || []).concat(c)), a
            ),
            {}
          )
        ];
        if (dataJob[0][1] !== undefined) {
          this.data.job = dataJob[0][1];
        }
        if (dataJob[0][2] !== undefined) {
          this.data.admit = dataJob[0][2];
        }
        if (dataJob[0][3] !== undefined) {
          this.data.result = [...dataJob[0][3]];
        }
        if (dataJob[0][4] !== undefined) {
          this.data.result = this.data.result.concat(dataJob[0][4]);
        }
      }
    });
  };
}
