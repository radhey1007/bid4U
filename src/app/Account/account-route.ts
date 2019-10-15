import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";

export const accountRoute = [
 
  { path: "account/login", component: LoginComponent ,data: { animation: 'heroes' } },
  { path: "account/signup", component: SignupComponent,data: { animation: 'heroes' }  },
  { path: "account/passwordreset", component: ForgotpasswordComponent,data: { animation: 'heroes' }  }
];

/**
 *
 *  Role Base Authentication Added
 *
 *  { path: 'account/passwordreset', canActivate: [RoleGuard],   data: {role: 'Admin'}, component: ForgotpasswordComponent },
 *
 * */
