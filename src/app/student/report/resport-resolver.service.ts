import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { CommonService } from "src/app/shared/common.service";
import { StorageService } from "src/app/shared/storage.service";

@Injectable({
  providedIn: "root"
})
export class ResportResolverService implements Resolve<any> {
  constructor(
    public sharedService: CommonService,
    public storage: StorageService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.sharedService.finalSubmit(route.paramMap.get("sessionID"));
  }
}
