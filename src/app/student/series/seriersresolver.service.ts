import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { StorageService } from 'src/app/shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeriersresolverService implements Resolve<any> {
  constructor(public sharedService: CommonService,public storage: StorageService) {}

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot) {

    let subjectData=this.storage.getUserSettings('subject');
    let param = {
      "participaintsID": 1,
      "quizID": 1,
      "duration": "00:20",
      "subjectId": 1
    }
    return this.sharedService.getQuizList(id);
  }

}
