import { QuizstComponent } from "./quizst/quizst.component";
import { DashboardStComponent } from "./dashboard-st/dashboard-st.component";

export const studentRoutes = [
  { path: "", component: DashboardStComponent, pathMatch: "full" },
  { path: "quiz", component: QuizstComponent }
];
