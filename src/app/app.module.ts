import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { componets } from "./component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingScreenInterceptor } from "./shared/loader/loading.interceptor";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { DatePipe } from "@angular/common";
import { CountdownModule } from "ngx-countdown";

@NgModule({
  declarations: [...componets],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
