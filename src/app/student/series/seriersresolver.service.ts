import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { CommonService } from "src/app/shared/common.service";
import { StorageService } from "src/app/shared/storage.service";

@Injectable({
  providedIn: "root"
})
export class SeriersresolverService implements Resolve<any> {
  constructor(
    public sharedService: CommonService,
    public storage: StorageService
  ) {}

  resolve() {
    let subjectData: any = this.storage.getUserSettings("subject");
    let userData = this.storage.getUserSettings("user");
    let studentID = userData.loginUserID;
    return this.sharedService.GetQuizseriesst(subjectData.subjectID, studentID);
  }
}
