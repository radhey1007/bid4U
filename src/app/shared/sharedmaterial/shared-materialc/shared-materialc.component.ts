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
  @Input() role: string;
  materialList: any = [];
  url: any = environment.apiurl;
  constructor(
    private actRoute: ActivatedRoute,
    public sharedService: CommonService,
    public storage: StorageService
  ) {}

  ngOnInit() {
    this.getUploadedMaterials();
  }

  getUploadedMaterials = () => {
    this.sharedService.getMatrialList().subscribe(data => {
      console.log(data);
      this.materialList = data;
    });
  };
}
