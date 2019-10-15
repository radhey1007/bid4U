import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoute } from '../admin-route';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderAdComponent } from '../header-ad/header-ad.component';
import { FooterAdComponent } from '../footer-ad/footer-ad.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PostjobComponent } from '../postjob/postjob.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent,PostjobComponent],
  imports: [
    CommonModule,RouterModule.forChild(AdminRoute),FormsModule
  ]
})
export class AdminsModule { }
