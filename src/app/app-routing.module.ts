import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from "../app/sidemenu/sidemenu.component";
import { ReportlistcontainerComponent } from "../app/reportlistcontainer/reportlistcontainer.component";
import { SelectedReportDetailsComponent } from "../app/selected-report-details/selected-report-details.component";
import { AboutUsComponent } from "../app/about-us/about-us.component";
import { MyServicesComponent } from "../app/my-services/my-services.component";
import { ReportQueryFormComponent } from "../app/report-query-form/report-query-form.component";
const routes: Routes = [
  { path: '', redirectTo: '/reportlistcontainer', pathMatch: 'full' },
  { path: 'sidemenu', component: SidemenuComponent },
  { path: 'selectedReport/:id',component:SelectedReportDetailsComponent},
  { path: 'reportlistcontainer', component: ReportlistcontainerComponent },
  { path: 'aboutuscontainer', component: AboutUsComponent },
  { path: 'myservicescontainer', component: MyServicesComponent },
  { path: 'reportqueryform/:id', component: ReportQueryFormComponent }
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
