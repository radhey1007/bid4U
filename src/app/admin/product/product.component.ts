import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "src/app/shared/common.service";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { environment } from "src/environments/environment";
import { StorageService } from "src/app/shared/storage.service";
import { NgForm } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productModel = {
    productName: "",
    productPrice: ""
  };
  id: any = "";
  constructor(
    public sharedService: CommonService,
    public http: HttpClient,
    private datePipe: DatePipe,
    public storage: StorageService,
    private toastr: ToastrService
  )
  { }

  ngOnInit() {
  }

}
