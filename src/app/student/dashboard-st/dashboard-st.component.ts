import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-dashboard-st",
  templateUrl: "./dashboard-st.component.html",
  styleUrls: ["./dashboard-st.component.css"]
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
  constructor() {}

  ngOnInit() {
    this.results.forEach(y => {
      this.month.push(y.month);
      this.price.push(y.price);
    });
    this.createchart(this.month, this.price);
  }
  createchart = (data: any, val: any) => {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "line",
      data: {
        labels: data,
        datasets: [
          {
            data: val,
            borderColor: "#3cba9f",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
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
}
