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
    productName: "",
    productPrice: "",
    productImage:"",
    productSku:"",
    productVisibility:"",
    productQuantity:"",
    productStock_status:""
  };

  imageUrl:string='';
  errMSG: string;
  constructor(
    public sharedService: CommonService,
    public http: HttpClient,
    private toastr: ToastrService,
    private productService:ProductsService
  )
  { }

  ngOnInit() {
  }

  validateJobModel = (): boolean => {
    if (
      this.productModel.productName !== "" &&
      this.productModel.productPrice !== "" &&
      this.productModel.productImage !== "" &&
      this.productModel.productSku !== "" &&
      this.productModel.productVisibility !== "" &&
      this.productModel.productQuantity !== "" &&
      this.productModel.productStock_status !== ""

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
      //  console.log(event.target.result);
      this.imageUrl  = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
   
  }

  addProduct = () => {
    
    console.log(this.productModel)
      if (this.validateJobModel()) {
        const productData = {
          name: this.productModel.productName,
          price: this.productModel.productPrice,        
          image: this.imageUrl,
          sku: this.productModel.productSku,
          visibility: this.productModel.productVisibility,
          quantity: this.productModel.productQuantity,
          stock_status: this.productModel.productStock_status
        };
        console.log(productData , 'postData')
       
        var query = {
          query:`mutation{addProduct(${productData})}{
            name
            price 
            created_at
          }}`
        }

        var data = JSON.stringify(query);
       

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

}
