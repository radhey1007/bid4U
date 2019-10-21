import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizresolverService implements Resolve<any> {
  constructor(public sharedService: CommonService) {}

  resolve() {
    let param = {
      "participaintsID": 1,
      "quizID": 1,
      "duration": "00:20",
      "subjectId": 1
    }
    return this.sharedService.getQuizList(param);
  }
}
