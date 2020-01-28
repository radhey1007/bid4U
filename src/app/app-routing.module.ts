import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { accountRoute } from "./Account/account-route";
import { commonroutes } from "./component";

import { AdminRoute } from "./admin/admin-route";

const routes: Routes = [...accountRoute, ...commonroutes];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}
