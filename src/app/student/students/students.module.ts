import { SubjectstComponent } from "./../subjectst/subjectst.component";
import { QuizstComponent } from "./../quizst/quizst.component";
import { DashboardStComponent } from "./../dashboard-st/dashboard-st.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { studentRoutes } from "../students-route";
import { SeriesComponent } from '../series/series.component';

@NgModule({
  declarations: [DashboardStComponent, QuizstComponent, SubjectstComponent,SeriesComponent],
  imports: [CommonModule, RouterModule.forChild(studentRoutes), FormsModule]
})
export class StudentsModule {}
