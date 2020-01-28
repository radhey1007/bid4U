import { Injectable } from "@angular/core";
import { StorageService } from "src/app/shared/storage.service";
import { CommonService } from "src/app/shared/common.service";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MaterialstResolverService implements Resolve<any> {
  constructor(
    public sharedService: CommonService,
    public storage: StorageService
  ) {}

  resolve() {
    return this.sharedService.getMatrialList();
  }
}
