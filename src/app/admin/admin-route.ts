import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostjobComponent } from './postjob/postjob.component';



export const AdminRoute = [
    { path: '', component: DashboardComponent,pathMatch:"full"},
    { path: 'postjob', component: PostjobComponent}
];