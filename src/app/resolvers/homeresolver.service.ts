import { Injectable } from "@angular/core";
import { CommonService } from "../shared/common.service";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class HomeresolverService implements Resolve<any> {
  constructor(public sharedService: CommonService) {}

  resolve() {
    // return this.sharedService.getJobData();
    return this.sharedService.MultipleResourceJoin();
  }
}
