import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { About as About } from './about/about.component';
import { Services as Services } from './services/nav.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { NavService } from './services/nav.service';

// FOR HASING
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContactUs } from './contactus/contact.component';

const routes: Routes = [
  {
    'path': "",
    redirectTo: 'home', 'pathMatch': 'full'
  },
  {
    'path': "home",
    "component": HomeComponent
  },
  {
    'path': "contactUs",
    "component": ContactUs
  },
  {
    'path': "about",
    "component": About
  },
  {
    'path': "services",
    "component": Services
  },
  {
    'path': "**",
    "component": PagenotfoundComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    ContactUs,
    About,
    Services,
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