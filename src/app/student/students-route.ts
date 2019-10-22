import { Component } from '@angular/core';
import { SeriesComponent } from './series/series.component';
import { SubjectresolverService } from "./subjectst/subjectresolver.service";
import { componets } from "./../component";
import { QuizstComponent } from "./quizst/quizst.component";
import { DashboardStComponent } from "./dashboard-st/dashboard-st.component";
import { QuizresolverService } from "./quizst/quizresolver.service";
import { SubjectstComponent } from "./subjectst/subjectst.component";

export const studentRoutes = [
  { path: "", component: DashboardStComponent, pathMatch: "full" },
  {
    path: "quiz",
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
  },{
    path:":subject/series",
    component:SeriesComponent
  }
];
