import { CommonService } from "src/app/shared/common.service";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { QuizresolverService } from "./quizresolver.service";
import { ActivatedRoute } from "@angular/router";
import { StorageService } from "src/app/shared/storage.service";

@Component({
  selector: "app-quizst",
  templateUrl: "./quizst.component.html",
  styleUrls: ["./quizst.component.css"],
  providers: [QuizresolverService]
})
export class QuizstComponent implements OnInit {
  isLodader: Boolean = false;
  Quiz: any = {};
  Quizlist: any = [];
  totalQuestion = 0;
  i: number = 0;
  duration: any = 0;
  constructor(
    private actRoute: ActivatedRoute,
    private sharedService: CommonService,
    public storage: StorageService
  ) {
    let seriesData: any = this.storage.getUserSettings("series");
    this.duration = Number(seriesData.durationInSeconds);
    console.log(
      "***********Duration ***************" + seriesData.durationInSeconds
    );
  }

  ngOnInit() {
    this.bindQuizList();
  }

  next() {
    // this.Quizlist[this.i].answer = this.Quiz.answer;
    ++this.i;
    this.Quiz = {};
    this.Quiz = this.Quizlist[this.i];
    this.animateDiv();
  }
  secondsToHms = d => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  };
  animateDiv = () => {
    let loadingContainer: HTMLElement = document
      .getElementsByClassName("quiz")
      .item(0) as HTMLElement;
    let loading: HTMLElement = document
      .getElementsByClassName("load")
      .item(0) as HTMLElement;
    loadingContainer.style.display = "none";
    loading.style.display = "block";
    setTimeout(function() {
      loading.style.display = "none";
      loadingContainer.style.display = "block";

      /* something else */
    }, 1000);
  };
  pre() {
    --this.i;
    this.Quiz = {};
    this.Quiz = this.Quizlist[this.i];
    this.animateDiv();
  }
  bindQuizList = () => {
    this.actRoute.data.subscribe(data => {
      this.sharedService
        .getQuizListbyid(data.routeResolver.id)
        .subscribe((_res: any) => {
          _res.forEach(el => {
            el.answer = "";
          });
          this.Quizlist = _res;
          this.Quiz = _res[0];
          this.totalQuestion = this.Quizlist.length;
          console.table(this.Quiz);
        });
    });
  };
  clickradio = (answer: any) => {
    this.Quiz.answer = answer;
  };
}
