import { QuizresolverService } from "./resolver/quizresolver.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostjobComponent } from "./postjob/postjob.component";
import { MaterialComponent } from "./material/material.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ManageuserRoleComponent } from "./manageuser-role/manageuser-role.component";

export const AdminRoute = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "postjob", component: PostjobComponent },
  { path: "postmaterial", component: MaterialComponent },
  {
    path: "postQuiz",
    component: QuizComponent,
    resolve: {
      routeResolver: QuizresolverService
    }
  },
  { path: "userRole", component: ManageuserRoleComponent }
];
