import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { NavService } from './nav/nav.service';

// FOR HASING
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    'path': "",
    "component": HomeComponent
  },
  {
    'path': "home",
    "component": HomeComponent
  },
  {
    'path': "contactUs",
    "component": EmployeeListComponent
  },
  {
    'path': "about",
    "component": DepartmentListComponent
  },
  {
    'path': "services",
    "component": NavComponent
  },
  {
    'path': "**",
    "component": PagenotfoundComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    NavComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    SimpleNotificationsModule.forRoot(),
    ToastyModule.forRoot()
  ],
  providers: [
    NavService, { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }