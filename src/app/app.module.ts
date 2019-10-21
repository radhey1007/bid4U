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
import { StudentComponent } from "./student/student.component";
import { HeaderStComponent } from "./student/header-st/header-st.component";
import { FooterStComponent } from "./student/footer-st/footer-st.component";
import { SidebarStComponent } from "./student/sidebar-st/sidebar-st.component";
import { DashboardStComponent } from "./student/dashboard-st/dashboard-st.component";
import { MaterialComponent } from "./admin/material/material.component";
import { QuizComponent } from "./admin/quiz/quiz.component";
import { ManageuserRoleComponent } from "./admin/manageuser-role/manageuser-role.component";
import { CurrentaffairsComponent } from './admin/currentaffairs/currentaffairs.component';

@NgModule({
  declarations: [...componets, CurrentaffairsComponent],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
