import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../../common.service";
import { StorageService } from "../../storage.service";

@Component({
  selector: "app-shared-materialc",
  templateUrl: "./shared-materialc.component.html",
  styleUrls: ["./shared-materialc.component.css"]
})
export class SharedMaterialcComponent implements OnInit {
  @Input() role: string = "";
  materialList: any = [];
  curPage: number;
  pageSize: number;
  totalpageSize: number;
  url: any = environment.docUrl;
  constructor(
    private actRoute: ActivatedRoute,
    public sharedService: CommonService,
    public storage: StorageService
  ) {
    this.curPage = 1;
    this.pageSize = 10;
  }

  ngOnInit() {
    console.log(this.role);
    this.getUploadedMaterials();
  }

  getUploadedMaterials = () => {
    this.sharedService.getMatrialList().subscribe(data => {
      this.materialList = data;
      this.materialList.forEach((element, i) => {
        element.sr = i + 1;
      });
      this.totalpageSize = this.numberOfPages();
    });
  };
  numberOfPages() {
    return Math.ceil(this.materialList.length / this.pageSize);
  }
  //   loadRecords=(pageNumber:any)=>{
  // this.curPage=this.curPage+pageNumber;
  //   }
}
