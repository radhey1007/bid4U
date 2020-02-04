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
    var headers = new HttpHeaders()
    .set("Content-Type", 'application/json')
    .set("Access-Control-Allow-Origin", '*');
    var url = this.baseUrl;
    console.log(url);
    return this.http.post(url , data, {headers});
  };
}
