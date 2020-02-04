import { Router } from '@angular/router';
import { ProductsService } from './../../services/product/products.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './../../shared/common.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-prdoct-list',
  templateUrl: './prdoct-list.component.html',
  styleUrls: ['./prdoct-list.component.css']
})
export class PrdoctListComponent implements OnInit {
 
  productList: any=[];
  constructor(
    public sharedService: CommonService,
    public http: HttpClient,
    private toastr: ToastrService,
    private productService:ProductsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct = () => {
    var query = {       
      query:`{            
          products {
            id
            name
            created_at
            category_id
            price
            quantity
            stock_status
            image
          }            
        }`
    }   
    this.productService.getProduct(query).subscribe((res:any) =>{
        console.log(res.data.products);
        this.productList = res.data.products;
    },
    err=>{
      console.log(err);
    });
  }
}
