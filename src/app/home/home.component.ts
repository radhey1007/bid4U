import { HomeresolverService } from "./../resolvers/homeresolver.service";
import { Component, OnInit } from "@angular/core";
import { CommonService } from "../shared/common.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [HomeresolverService]
})
export class HomeComponent implements OnInit {
  constructor(public sharedService: CommonService) {}
  data = {
    job: [],
    admit: [],
    result: []
  };
  ngOnInit() {
    this.getIP();
  }
  getIP = () => {
    this.sharedService.getJobData().subscribe((_res: any) => {
      console.table(_res);
      if (_res) {
        let dataJob = [
          _res.reduce(
            (a, c) => (
              (a[c.jobAlertFlag] = (a[c.jobAlertFlag] || []).concat(c)), a
            ),
            {}
          )
        ];
        if( dataJob[0][1] !== undefined){

          this.data.job = dataJob[0][1];
        }
        if( dataJob[0][2] !== undefined){
          this.data.admit = dataJob[0][2];
        }
        if( dataJob[0][3] !== undefined){
          this.data.result = [...dataJob[0][3]];
        }
        if( dataJob[0][4] !== undefined){
          this.data.result =  this.data.result.concat(dataJob[0][4]) ;
        }
        // this.data.result = [...dataJob[0][3], ...dataJob[0][4]];

        // console.log(dataJob[0][1]);
      }
    });
  };
}
