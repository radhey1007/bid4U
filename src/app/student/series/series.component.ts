import { SeriersresolverService } from "./seriersresolver.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StorageService } from "src/app/shared/storage.service";

@Component({
  selector: "app-series",
  templateUrl: "./series.component.html",
  styleUrls: ["./series.component.css"],
  providers: [SeriersresolverService]
})
export class SeriesComponent implements OnInit {
  subjectInfo: any = {};
  showMore: boolean = false;
  seriesList: any = [];
  totalSeries: any = [];
  limitto: any = 12;
  constructor(
    public route: Router,
    private actRoute: ActivatedRoute,
    public storage: StorageService
  ) {
   
    //console.log(this.route.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    this.getQuizSeriesList();
  }
  getQuizSeriesList = () => {
    this.actRoute.data.subscribe(data => {
      if (data.routeResolver) {
        this.totalSeries = data.routeResolver;
        this.totalSeries.forEach(el => {
          el.color = this.getRandomColor();
        });
        this.seriesList = this.totalSeries.slice(0, this.limitto);
        if (this.totalSeries.length > 0) {
          this.showMore = true;
          if (
            this.limitto > this.totalSeries.length ||
            this.limitto == this.totalSeries.length
          ) {
            this.showMore = false;
          }
        }
        let subjectData = this.storage.getUserSettings("subject");
        if (subjectData) {
          this.subjectInfo = subjectData == undefined ? {} : subjectData;
        }
        // console.table(this.seriesList);
      }
    });
  };
  getRandomColor = () => {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return "#" + ("000000" + color).slice(-6);
  };

  getSeries = (series: any) => {
    this.storage.clearUserSettings("series");
    this.storage.setSettings("series", series);
    let routeUrl: any = `../${series.quizID}/quizExam`;

    this.route.navigate([routeUrl], {
      relativeTo: this.actRoute,
      state: series
    });
  };
  secondsToHms = d => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours  ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes  ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  };
  loadMore = () => {
    this.limitto += this.limitto;
    this.seriesList = this.totalSeries.slice(0, this.limitto);
  };
}
