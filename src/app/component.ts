import { AppComponent } from "./app.component";
import { LoginComponent } from "./Account/login/login.component";
import { SignupComponent } from "./Account/signup/signup.component";
import { HeaderAComponent } from "./Layout/header-a/header-a.component";
import { FooterAComponent } from "./Layout/footer-a/footer-a.component";
import { ForgotpasswordComponent } from "./Account/forgotpassword/forgotpassword.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from './admin/admin.component';
import { HeaderAdComponent } from './admin/header-ad/header-ad.component';
import { FooterAdComponent } from './admin/footer-ad/footer-ad.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { PostjobComponent } from './admin/postjob/postjob.component';
import { StudentComponent } from './student/student.component';
import { HeaderStComponent } from './student/header-st/header-st.component';
import { FooterStComponent } from './student/footer-st/footer-st.component';
import { SidebarStComponent } from './student/sidebar-st/sidebar-st.component';



export const componets = [
  AppComponent,
  LoginComponent,
  SignupComponent,
  HeaderAComponent,
  FooterAComponent,
  ForgotpasswordComponent,
  PageNotFoundComponent,
  HomeComponent,
  AdminComponent
  ,HeaderAdComponent,FooterAdComponent,SidebarComponent ,StudentComponent,
  HeaderStComponent,
  FooterStComponent,
  SidebarStComponent,
];

export const commonroutes = [
  { path: "", component: HomeComponent, pathMatch: "full",data: { animation: 'heroes' }   },
  {path: "admin/dashboard",data: { animation: 'heroes' } , component: AdminComponent,loadChildren: () => import('./admin/admins/admins.module').then(m => m.AdminsModule)},
  {path: "student/dashboard",data: { animation: 'heroes' } , component: StudentComponent,loadChildren: () => import('./student/students/students.module').then(m => m.StudentsModule)},
  { path: "**",data: { animation: 'heroes' } , component: PageNotFoundComponent }
];
