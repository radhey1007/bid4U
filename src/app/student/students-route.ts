import { QuizstComponent } from "./quizst/quizst.component";
import { DashboardStComponent } from "./dashboard-st/dashboard-st.component";
import { QuizresolverService } from './quizst/quizresolver.service';

export const studentRoutes = [
  { path: "", component: DashboardStComponent, pathMatch: "full" },
  { path: "quiz", component: QuizstComponent,resolve: {
    routeResolver: QuizresolverService
  } }
];
