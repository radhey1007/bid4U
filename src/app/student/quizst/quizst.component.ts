import { CommonService } from "src/app/shared/common.service";
import { Component, OnInit, Renderer2, ViewChild } from "@angular/core";
import { QuizresolverService } from "./quizresolver.service";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "src/app/shared/storage.service";
import { CountdownComponent, CountdownEvent, CountdownConfig } from "ngx-countdown";
import { NgForm } from "@angular/forms";
import { Location } from "@angular/common";
@Component({
  selector: "app-quizst",
  templateUrl: "./quizst.component.html",
  styleUrls: ["./quizst.component.css"],
  providers: [QuizresolverService]
})
export class QuizstComponent implements OnInit {
  @ViewChild("countdown", { static: false }) counter: CountdownComponent;
  @ViewChild("userForm", { static: false }) mytemplateForm: NgForm;
  isLodader: Boolean = false;
  answerValue: any = null;
  Quiz: any = {};
  QuizsessionID: any = "";
  Quizlist: any = [];
  totalQuestion = 0;
  i: number = 0;
  duration: any = 0;
  titleInfo: any = {};
  notify:boolean=false;
  notifyMSG:any='';
  constructor(
    private actRoute: ActivatedRoute,
    private sharedService: CommonService,
    public storage: StorageService,
    public route: Router,
    private _location: Location
  ) {
    let seriesData: any = this.storage.getUserSettings("series");
    this.duration = Number(seriesData.durationInSeconds);
    
  }

  ngOnInit() {
    this.bindQuizList();
   
  }
 
  finishTest(ev:CountdownEvent) {
  
  if(ev.action === 'notify'){
    this.notify=true;
    this.notifyMSG = ` Please hurry up.${ev.left/1000} seconds are left.`;
  }else if(ev.action=='done'){
    this.next("T");

  }else{
    this.notify=false;
    return false;
  }
      }
  next(timeout?) {
   
    /***************Answer Submittion Begin**********************************/
    let data = {
      sessionID: this.QuizsessionID,
      updatetime: this.counter.i.text
    };
    if (timeout == "T") {
      this.i = this.totalQuestion;
      this.updateTimeByAnswer(data,'T');
    } else {
      if(timeout!==undefined && timeout=='F'){
        this.QuizAnswerSubmit(this.Quiz, data,timeout);
      }else{
        this.QuizAnswerSubmit(this.Quiz, data);
      }
      
    }
    /**************Answer Submition CLose***********************************/
  }
  resetTemplate = () => {
    this.mytemplateForm.reset();
    this.counter.pause();
    ++this.i;
    this.Quiz = {};
    this.Quiz = this.Quizlist[this.i];
  };
  secondsToHms = d => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
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
    this.counter.begin();
    this.answerValue = null;
    setTimeout(function() {
      loading.style.display = "none";
      loadingContainer.style.display = "block";

      /* something else */
    }, 1000);
  };
  pre() {
   
   // console.log(this.i);
    --this.i;
    //console.log(this.i);
    this.Quiz = {};
    this.Quiz = this.Quizlist[this.i];
    this.animateDiv();
  }
  bindQuizList = () => {
    this.storage.clearUserSettings("examinfo");
    this.actRoute.data.subscribe(data => {
      this.QuizsessionID = data.routeResolver.id;
      this.sharedService
        .getQuizListbyid(data.routeResolver.id)
        .subscribe((_res: any) => {
          _res.forEach(el => {
            el.answer = "";
          });
          this.Quizlist = _res;
          this.Quiz = _res[0];
          this.totalQuestion = this.Quizlist.length;
          let subjectData = this.storage.getUserSettings("subject");
          let series = this.storage.getUserSettings("series");
          let info = {
            Qlenth: this.totalQuestion,
            subject: subjectData.subjectName,
            series: series.quizName
          };
          this.titleInfo = info;
          this.storage.setSettings("examinfo", info);
        });
    });
  };
  QuizAnswerSubmit = (question: any, timedata: any,finish?) => {
    if (this.answerValue !== null) {
      let questionData = {
        QuizID: question.qa.id,
        answer: this.answerValue
      };
      this.sharedService.QuestionwiseAnswerSubmit(questionData).subscribe(
        (_res: any) => {
          if(finish!==undefined){
            this.updateTimeByAnswer(timedata,finish);
          }else{
            this.updateTimeByAnswer(timedata);
          }
        
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.updateTimeByAnswer(timedata);
    }
  };
  updateTimeByAnswer = (updateTime: any,timeout?) => {
    this.sharedService.updateTimebyAnswer(updateTime).subscribe(
      (_res: any) => {
        this.resetTemplate();

        if (this.i == this.totalQuestion || timeout=='T' || timeout=='F') {
          this.sharedService.completeQuizExam(updateTime).subscribe(
            _res => {
              this.finishQuiz();
            },
            err => {
              console.log(err);
            }
          );
        } else {
          this.animateDiv();
        }
      },
      err => {
        console.log(err);
      }
    );
  };
  clickradio = (answer: any) => {
    // this.Quiz.answer = answer;
    this.answerValue = answer;
    this.Quizlist[this.i].answer = answer;
   
  };
  finishQuiz = () => {
    let routeUrl: any = `../report/${this.QuizsessionID}`;

    this.route.navigate([routeUrl], {
      relativeTo: this.actRoute
    });
  };
  goBack = () => {
    this._location.back();
  };
}
