import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: "app-quizst",
  templateUrl: "./quizst.component.html",
  styleUrls: ["./quizst.component.css"]
})
export class QuizstComponent implements OnInit {
  isLodader: Boolean = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {

    
  }
  onNext=()=>{
    this.isLodader=true;
  }
}
