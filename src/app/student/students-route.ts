import { Component } from "@angular/core";
import { SeriesComponent } from "./series/series.component";
import { SubjectresolverService } from "./subjectst/subjectresolver.service";
import { componets } from "./../component";
import { QuizstComponent } from "./quizst/quizst.component";
import { DashboardStComponent } from "./dashboard-st/dashboard-st.component";
import { QuizresolverService } from "./quizst/quizresolver.service";
import { SubjectstComponent } from "./subjectst/subjectst.component";
import { SeriersresolverService } from "./series/seriersresolver.service";
import { ReportComponent } from "./report/report.component";
import { ResportResolverService } from "./report/resport-resolver.service";

export const studentRoutes = [
  { path: "", component: DashboardStComponent, pathMatch: "full" },
  {
    path: ":subject/:series/quizExam",
    component: QuizstComponent,
    resolve: {
      routeResolver: QuizresolverService
    }
  },
  {
    path: "subject",
    component: SubjectstComponent,
    resolve: {
      routeResolver: SubjectresolverService
    }
  },
  {
    path: ":subject/series",
    component: SeriesComponent,
    resolve: {
      routeResolver: SeriersresolverService
    }
  },
  {
    path: ":subject/:series/report/:sessionID",
    component: ReportComponent,
    resolve: {
      routeResolver: ResportResolverService
    }
  }
];
