import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { ActivatedRoute } from "@angular/router";
import { DashboardResolverService } from "./dashboard-resolver.service";
import { CommonService } from "src/app/shared/common.service";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { StorageService } from "src/app/shared/storage.service";
@Component({
  selector: "app-dashboard-st",
  templateUrl: "./dashboard-st.component.html",
  styleUrls: ["./dashboard-st.component.css"],
  providers: [DashboardResolverService]
})
export class DashboardStComponent implements OnInit {
  @ViewChild("chart", { static: true }) private chartRef;
  results: any = [
    {
      month: "Jan",
      price: "180"
    },
    {
      month: "Feb",
      price: "200"
    },
    {
      month: "March",
      price: "210"
    },
    {
      month: "April",
      price: "190"
    },
    {
      month: "May",
      price: "240"
    },
    {
      month: "June",
      price: "230"
    },
    {
      month: "July",
      price: "260"
    },
    {
      month: "Aug",
      price: "210"
    },
    {
      month: "Sept",
      price: "300"
    }
  ];
  chart = [];
  price = [];
  month = [];
  subjectList: any = [];
  model = {
    subject: "0",
    fdate: "",
    todate: ""
  };
  constructor(
    private shared: CommonService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    public storage: StorageService
  ) {}

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      console.log("********************Dash Board Data****************");
      console.log(data.routeResolver);
      this.results = data.routeResolver;
      this.getSubject();
    });
    this.results.forEach(y => {
      this.month.push(y.quizName);
      this.price.push(y.markObtained);
    });
    this.createchart(this.month, this.price);
  }
  createchart = (data: any, val: any) => {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "bar",
      data: {
        labels: data,
        datasets: [
          {
            data: val,
            fill:false,
            backgroundColor:"#e04f2869"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
              title: {
                display: true,
                text: 'Student test results in %'
            },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  };

  getSubject = () => {
    this.shared.getSubjectList().subscribe((_res: any) => {
      this.subjectList = _res;
    });
  };

  searchRecord = () => {
    let userData = this.storage.getUserSettings("user");
    let studentID = userData.loginUserID;
    if (
      (this.model.fdate !== "" && this.model.todate == "") ||
      (this.model.fdate == "" && this.model.todate !== "")
    ) {
      this.toastr.error("Error!", "Please select valid date range!", {
        timeOut: 3000
      });
    } else {
      if (this.model.fdate !== "" && this.model.todate !== "") {
        if (this.validateDate()) {
          let data = {
            fromDate: this.model.fdate,
            toDate: this.model.todate,
            subjectId: this.model.subject == "0" ? null : this.model.subject,
            studentID: studentID
          };
          this.getSerachData(data);
        } else {
          this.toastr.error(
            "Error!",
            "From date can not be greater than to date.!",
            {
              timeOut: 3000
            }
          );
        }
      } else {
        let data = {
          fromDate: this.model.fdate == "" ? null : this.model.fdate,
          toDate: this.model.todate == "" ? null : this.model.todate,
          subjectId: this.model.subject == "0" ? null : this.model.subject,
          studentID: studentID
        };
        this.getSerachData(data);
      }
    }
  };

  getSerachData = (data: any) => {
    this.month.length=0;
    this.price.length=0;
    this.shared.studentGraph(data).subscribe(
      (_res: any) => {
        console.log(_res);
        this.results = _res;
        if (this.results.length > 0) {
          this.results.forEach(y => {
            this.month.push(y.quizName);
            this.price.push(y.markObtained);
          });
          this.createchart(this.month, this.price);
        }
      },
      err => {
        console.log(err);
      }
    );
  };
  validateDate = () => {
    var todate = moment(this.model.todate);
    var fdate = moment(this.model.fdate);

    if (fdate < todate) {
      return true;
    } else {
      return false;
    }
  };
}
