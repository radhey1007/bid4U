import { CommonService } from "src/app/shared/common.service";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { QuizresolverService } from "./quizresolver.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-quizst",
  templateUrl: "./quizst.component.html",
  styleUrls: ["./quizst.component.css"],
  providers: [QuizresolverService]
})
export class QuizstComponent implements OnInit {
  isLodader: Boolean = false;
  constructor(
    private actRoute: ActivatedRoute,
    private sharedService: CommonService
  ) {}
  Quiz: any = {};
  Quizlist: any = [];
  totalQuestion = 0;
  i: number = 0;
  ngOnInit() {
    this.bindQuizList();
  }

  next() {
    this.Quizlist[this.i].answer = this.Quiz.answer;
    ++this.i;
    this.Quiz = {};
    this.Quiz = this.Quizlist[this.i];
    this.animateDiv();
  }
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
          console.table(this.Quizlist);
        });
    });
  };
  clickradio = (answer: any) => {
    this.Quiz.answer = answer;
  };
}
