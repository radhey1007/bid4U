import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CommonService } from "src/app/shared/common.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  subjectList: any = [];
  ckeConfigQuiz: any;
  quetsionsArray: any = [];
  quiz = {
    answerE: "",
    answerD: "",
    answerC: "",
    answerB: "",
    answerA: "",
    question: "",
    series: "",
    subject: ""
  };
  updatedItem: any = "";
  IsForUpdate: any = "N";
  seriesList: any = [];
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private sharedService: CommonService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.ckeConfigQuiz ={
      allowedContent: false,
      extraPlugins: "divarea",
      forcePasteAsPlainText: true,
      toolbar: [
        "/",
        {
          name: "basicstyles",
          groups: ["basicstyles", "cleanup"],
          items: [
            "Bold",
            "Italic",
            "Underline",
            "Strike",
            "Subscript",
            "Superscript",
            "-",
            "CopyFormatting",
            "RemoveFormat"
          ]
        },
        {
          name: "paragraph",
          groups: ["list", "indent", "blocks", "align", "bidi"],
          items: [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "-",
            "Blockquote",
            "CreateDiv",
            "-",
            "JustifyLeft",
            "JustifyCenter",
            "JustifyRight",
            "JustifyBlock",
            "-",
            "BidiLtr",
            "BidiRtl",
            "Language"
          ]
        },
        { name: "links", items: ["Link", "Unlink", "Anchor"] },

        { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
        { name: "colors", items: ["TextColor", "BGColor"] },
        { name: "tools", items: ["Maximize", "ShowBlocks"] },
        { name: "others", items: ["-"] }
      ]
    };
    this.actRoute.data.subscribe(data => {
      if (data.routeResolver) {
        this.subjectList = data.routeResolver;
      }
    });
  }

  postQuiz = () => {
    debugger;
    if (this.quiz.answerE !== "") {
      const quiz = {
        subjectID: this.quiz.subject,
        quizID:    this.quiz.series,
        question:  this.quiz.question,
        option1:   this.quiz.answerA,
        option2:   this.quiz.answerB,
        option3:   this.quiz.answerC,
        option4:   this.quiz.answerD,
        answer:    this.quiz.answerE
      };
      this.quetsionsArray.push(quiz);
      this.quiz.answerE = "";
    
     // console.log(this.mytemplateForm);
      this.resetControls();
     // this.mytemplateForm.reset();
      

    } else {
      this.boxselection("E");
      this.toastr.error("Error!", "Please select right answer!", {
        timeOut: 3000
      });
    }
  };
resetControls=()=>{
  this.mytemplateForm.controls['question'].reset();
  this.mytemplateForm.controls['answerA'].reset()
  this.mytemplateForm.controls['answerB'].reset()
  this.mytemplateForm.controls['answerC'].reset()
  this.mytemplateForm.controls['answerD'].reset()
}
  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.quetsionsArray.length; i++) {
      if (i == data) {
        (this.quetsionsArray[i].quizID = this.quiz.series),
          (this.quetsionsArray[i].subjectID = this.quiz.subject),
          (this.quetsionsArray[i].question = this.quiz.question),
          (this.quetsionsArray[i].option1 = this.quiz.answerA),
          (this.quetsionsArray[i].option2 = this.quiz.answerB),
          (this.quetsionsArray[i].option3 = this.quiz.answerC),
          (this.quetsionsArray[i].option4 = this.quiz.answerD),
          (this.quetsionsArray[i].answer = this.quiz.answerE);
      }
    }
    this.IsForUpdate = "N";
    this.quiz.answerE = "";
    this.resetControls();
  }
  EditItem(i) {
    let item = this.quetsionsArray[i];
    this.quiz.subject = item.subjectID;
    this.quiz.series = item.quizID;
    this.quiz.question = item.question;
    this.quiz.answerA = item.option1;
    this.quiz.answerB = item.option2;
    this.quiz.answerC = item.option3;
    this.quiz.answerD = item.option4;
    this.quiz.answerE = item.answer;
    this.updatedItem = i;
    this.IsForUpdate = "Y";
  }
  DeleteItem(i) {
    this.quetsionsArray.splice(i, 1);
  }
  BulkInsert = () => {
    this.sharedService.PoastQuiz(this.quetsionsArray).subscribe(
      _res => {
        this.toastr.success("Success!", "Quiz successfully posted!", {
          timeOut: 3000
        });
        // this.quiz.answerE = "";
        // this.mytemplateForm.reset();
        this.quetsionsArray.length = 0;
        // this.quiz.subject = "";
        // this.quiz.series = "";
      },
      err => {
        console.log(err);
        this.toastr.error("Error!", "Error Occured please try again later!", {
          timeOut: 3000
        });
      }
    );
  };

  boxselection = (I: any) => {
    let boxs = document.querySelectorAll(".foo");
    if (I == "E") {
      boxs.forEach(x => {
        x.classList.add("thisinvalid");
      });
    } else {
      boxs.forEach(x => {
        x.classList.remove("thisinvalid");
      });
    }
  };
  addClass(rightAnswer: any) {
    this.quiz.answerE = rightAnswer;
    this.boxselection("V");
  }
  onSubjectSelected = () => {
    this.sharedService.GetQuizseries(this.quiz.subject).subscribe(
      _res => {
        this.seriesList = _res;
      },
      err => {
        console.log(err);
      }
    );
  };
}
