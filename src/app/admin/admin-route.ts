import { PrdoctListComponent } from './prdoct-list/prdoct-list.component';
import { ChangepasswordAComponent } from "./changepassword-a/changepassword-a.component";
import { QuizresolverService } from "./resolver/quizresolver.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostjobComponent } from "./postjob/postjob.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { SeriesMasterComponent } from './series-master/series-master.component';
import { ContentComponent } from './content/content.component';
import { ContentresolverService } from './content/contentresolver.service';
import { ProductComponent } from './product/product.component';

export const AdminRoute = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "postjob", component: PostjobComponent },
  {
    path: "content",
    component: ContentComponent,
    resolve: {
      routeResolver: ContentresolverService
    }
  },
  {
    path: ":post/material-list",
    component: MaterialListComponent
  },
  {
    path: "change-password",
    component: ChangepasswordAComponent
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
