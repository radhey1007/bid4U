import { Injectable } from "@angular/core";
import { CommonService } from "src/app/shared/common.service";
import { Resolve } from "@angular/router";
import { StorageService } from "src/app/shared/storage.service";

@Injectable({
  providedIn: "root"
})
export class QuizresolverService implements Resolve<any> {
  constructor(
    public sharedService: CommonService,
    public storage: StorageService
  ) {}

  resolve() {
    // let subjectData: any = this.storage.getUserSettings("subject");
    let seriesData: any = this.storage.getUserSettings("series");
    let param = {
      participaintsID: 1,
      quizID: seriesData.quizID,
      duration: seriesData.quizDureation,
      subjectId: seriesData.subjectID
    };
    return this.sharedService.getQuizList(param);
  }
}
