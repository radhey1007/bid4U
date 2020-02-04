import { ChangepasswordAComponent } from "./changepassword-a/changepassword-a.component";
import { CurrentaffairsComponent } from "./currentaffairs/currentaffairs.component";
import { QuizresolverService } from "./resolver/quizresolver.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostjobComponent } from "./postjob/postjob.component";
import { MaterialComponent } from "./material/material.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ManageuserRoleComponent } from "./manageuser-role/manageuser-role.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { SubjectMasterComponent } from './subject-master/subject-master.component';
import { SeriesMasterComponent } from './series-master/series-master.component';
import { ContentComponent } from './content/content.component';
import { ContentresolverService } from './content/contentresolver.service';
import { ProductComponent } from './product/product.component';
import { PrdoctListComponent } from './prdoct-list/prdoct-list.component';

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
  {
    path: "content",
    component: ContentComponent,
    resolve: {
      routeResolver: ContentresolverService
    }
  },
  { path: "userRole", component: ManageuserRoleComponent },
  {
    path: ":post/material-list",
    component: MaterialListComponent
  },
  {
    path: "change-password",
    component: ChangepasswordAComponent
  },
  {
    path: "subject",
    component: SubjectMasterComponent
  },
  {
    path: "series",
    component: SeriesMasterComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "product-list",
    component: PrdoctListComponent
  },
];
