// app module of Global Market

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AppRoutingModule } from './app-routing.module';
import { ReportlistcontainerComponent } from './reportlistcontainer/reportlistcontainer.component';
import { ProductServices } from "./services";
import { SelectedReportDetailsComponent } from './selected-report-details/selected-report-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { ReportQueryFormComponent } from './report-query-form/report-query-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ReportlistcontainerComponent,
    SelectedReportDetailsComponent,
    AboutUsComponent,
    MyServicesComponent,
    ReportQueryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ProductServices
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
