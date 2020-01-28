import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentresolverService  implements Resolve<any> {
  constructor(public sharedService: CommonService) {}

  resolve() {
    return this.sharedService.getcontentPage();
  }
}
