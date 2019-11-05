import { CpasswordmodModule } from "./../../shared/changepassword/cpasswordmod/cpasswordmod.module";
import { CurrentaffairsComponent } from "./../currentaffairs/currentaffairs.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminRoute } from "../admin-route";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HeaderAdComponent } from "../header-ad/header-ad.component";
import { FooterAdComponent } from "../footer-ad/footer-ad.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PostjobComponent } from "../postjob/postjob.component";
import { FormsModule } from "@angular/forms";
import { MaterialComponent } from "../material/material.component";
import { QuizComponent } from "../quiz/quiz.component";
import { ManageuserRoleComponent } from "../manageuser-role/manageuser-role.component";
import { QuizresolverService } from "../resolver/quizresolver.service";
import { SharedmaterialModule } from "src/app/shared/sharedmaterial/sharedmaterial.module";
import { MaterialListComponent } from "../material-list/material-list.component";
import { ChangepasswordAComponent } from "../changepassword-a/changepassword-a.component";
import { SubjectMasterComponent } from '../subject-master/subject-master.component';
import { SeriesMasterComponent } from '../series-master/series-master.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostjobComponent,
    MaterialComponent,
    QuizComponent,
    ManageuserRoleComponent,
    CurrentaffairsComponent,
    MaterialListComponent,
    ChangepasswordAComponent,
    SubjectMasterComponent,
    SeriesMasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoute),
    FormsModule,
    SharedmaterialModule,
    CpasswordmodModule
  ],
  providers: [QuizresolverService]
})
export class AdminsModule {}
