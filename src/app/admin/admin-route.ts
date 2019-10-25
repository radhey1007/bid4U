import { CurrentaffairsComponent } from './currentaffairs/currentaffairs.component';
import { QuizresolverService } from "./resolver/quizresolver.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostjobComponent } from "./postjob/postjob.component";
import { MaterialComponent } from "./material/material.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ManageuserRoleComponent } from "./manageuser-role/manageuser-role.component";
import { MaterialListComponent } from './material-list/material-list.component';

export const AdminRoute = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "postjob", component: PostjobComponent },
  { path: "postmaterial", component: MaterialComponent },
  { path: "postGK", component: CurrentaffairsComponent },
  {
    path: "postQuiz",
    component: QuizComponent,
    resolve: {
      routeResolver: QuizresolverService
    }
  },
  { path: "userRole", component: ManageuserRoleComponent },
  {
    path:":post/material-list",component:MaterialListComponent
  }
];
