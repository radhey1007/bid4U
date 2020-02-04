import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

environment
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = environment.baseUrl;
  constructor(
    public http: HttpClient
  ) { }

  addProducts = (data: any) => {
    return this.http.post(this.baseUrl, data, {});
  };

  getProduct = (data) => {
    return this.http.post(this.baseUrl, data, {});
  }
}
