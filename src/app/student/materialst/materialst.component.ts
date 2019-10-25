import { MaterialstResolverService } from "./materialst-resolver.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-materialst",
  templateUrl: "./materialst.component.html",
  styleUrls: ["./materialst.component.css"],
  providers: [MaterialstResolverService]
})
export class MaterialstComponent implements OnInit {
  materialList: any = [];
  url: any = environment.apiurl;
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getUploadedMaterials();
  }

  getUploadedMaterials = () => {
    this.actRoute.data.subscribe(data => {
      console.log(data.routeResolver);
      this.materialList = data.routeResolver;
    });
  };
}
