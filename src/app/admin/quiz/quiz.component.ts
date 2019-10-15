import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz = {
    answerE: '',
    answerD: '',
    answerC: '',
    answerB: '',
    answerA: '',
    question: '',
    series: '',
    subject: ''
  }
  @ViewChild('myForm', { static: false }) mytemplateForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  postQuiz = () => {
    this.mytemplateForm.reset();
  }

}
