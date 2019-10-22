import { SubjectresolverService } from "./subjectresolver.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonService } from "src/app/shared/common.service";
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: "app-subjectst",
  templateUrl: "./subjectst.component.html",
  styleUrls: ["./subjectst.component.css"],
  providers: [SubjectresolverService]
})
export class SubjectstComponent implements OnInit {
  subjectList: any = [];
  constructor(
    public route: Router,
    private actRoute: ActivatedRoute,
    public storage: StorageService,
    private sharedService: CommonService
  ) {}

  ngOnInit() {
    this.bindSubjectList();
  }
  getSeries=(subject:any)=>{
    this.storage.clearUserSettings("subject");
    this.storage.setSettings("subject", subject);
    let routeUrl:any=`../${subject.subjectName}/series`;

 this.route.navigate([routeUrl], {relativeTo: this.actRoute, state: subject});
  }
  bindSubjectList = () => {
    this.actRoute.data.subscribe(data => {
      this.subjectList = data.routeResolver;
      this.subjectList.forEach(el => {
        el.color = this.getRandomColor();
      });
      console.log(data);
    });
  };
  getRandomColor = () => {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return "#" + ("000000" + color).slice(-6);
  };
}
