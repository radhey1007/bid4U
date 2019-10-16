import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpResponse,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage.service';

@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {
  constructor(public storage:StorageService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let loadingContainer: HTMLElement = document
      .getElementsByClassName("loading")
      .item(0) as HTMLElement;
    loadingContainer.style.display = "block";
    let content ='application/json';
    if (req.body instanceof FormData) {
      // we are sending a file here
      content = 'multipart/form-data';
    }
    console.log('>>>>>>>>>>>**<<<<<<<<<<<< '+ content)
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT",
      'Content-Type': content
    });
   
   req= req.clone({headers});
    
    if (this.storage.getUserSettings('token')) {
     let token =this.storage.getUserSettings('token');
    
     //console.log('*******************'+token.bearer+'*****************************')
      let userToken = 'Bearer ' + token.bearer
     req= req.clone({
        headers: req.headers.set('Authorization', userToken),
      })
    }
   
   //console.log( req);
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          loadingContainer.style.display = "none";
        }
      }, error => {
        loadingContainer.style.display = "none";
        console.error('NICE ERROR', error)
      })
    )


  }
}
