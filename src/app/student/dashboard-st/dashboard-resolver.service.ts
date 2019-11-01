import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { StorageService } from 'src/app/shared/storage.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any> {
  constructor(
    public sharedService: CommonService,
    public storage: StorageService
  ) {}

  resolve() {
    let userData = this.storage.getUserSettings("user");
      let studentID=userData.loginUserID;
    return this.sharedService.studentGraph(studentID);
  }
}
