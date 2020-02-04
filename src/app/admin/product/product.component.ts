import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "src/app/shared/common.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { NgForm } from "@angular/forms";
import { ProductsService } from '../../services/product/products.service';


 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @ViewChild("myForm", { static: false }) productForm: NgForm;
  productModel = {
    name: "",
    price: "",
    image:"",
    sku:"",
    visibility:"",
    quantity:"",
    stock_status:""
  };

  imageUrl:string='';
  errMSG: string;

  constructor(
    public sharedService: CommonService,
    public http: HttpClient,
    private toastr: ToastrService,
    private productService:ProductsService,
    private router:Router

  )
  { }

  ngOnInit() {
  }

  validateJobModel = (): boolean => {
    if (
      this.productModel.name !== "" &&
      this.productModel.price !== "" &&
      this.productModel.image !== "" &&
      this.productModel.sku !== "" &&
      this.productModel.visibility !== "" &&
      this.productModel.quantity !== "" &&
      this.productModel.stock_status !== ""

    ) {
      return true;
    } else {
      return false;
    }
  };
  onFileChange(event) {
    // this.clearFile();
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size / 1024 / 1024 > 5) {
        this.errMSG = "file is bigger than 5MB;Upto 5MB file size allow.";
        return false;
      }
      console.log(event.target.files)
      var reader = new FileReader();
      reader.onload = (event: any) => {
      this.productModel.image = 'test.jpg';
      this.imageUrl  = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
   
  }

  addProduct = () => {
    
    console.log(this.productModel)
       if (this.validateJobModel()) {
        console.log(this.productModel , 'postData')
        const {name,price,image,quantity,sku,visibility} =this.productModel;
        const data = {       
          query:`mutation {              
            addProduct(
                name:"${name}",
                price:${price},
                image:"${image}",
                quantity:${quantity},
                sku:"${sku}",
                stock_status:1,
                visibility:${visibility}
              )
              {
                price 
                created_at
              }
            }`
        }    
        this.productService.addProducts(data).subscribe(
          (_res: any) => {
            this.productForm.reset();
            this.toastr.success("Success!", "product added successfully!", {
              timeOut: 1000
            });
          },
          err => {
            this.toastr.error(
              "Error!",
              "Error occureed please try again later!",
              {
                timeOut: 2000
              }
            );
          }
        );
      
    } else {
      this.toastr.error("Error!", "Please fill all fields!", {
        timeOut: 3000
      });
    }
    
  };

  // goToProductList = () => {
  //   this.router.navigate(['admin/dashborad/product-list']);
  // }


}
