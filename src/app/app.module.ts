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
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider
} from "angularx-social-login";
import { SubjectMasterComponent } from './admin/subject-master/subject-master.component';
import { SeriesMasterComponent } from './admin/series-master/series-master.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "26944555896-5chu47rn1sgklrdc4onbj1okefmhk5eu.apps.googleusercontent.com"
    )
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("735731803559600")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [...componets],
  imports: [
    SocialLoginModule,
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
    { provide: AuthServiceConfig, useFactory: provideConfig },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
