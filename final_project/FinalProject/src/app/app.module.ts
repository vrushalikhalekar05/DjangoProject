import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { EmployeeComponent } from './sign-up/employee/employee.component';
import { EmployeeListComponent } from './sign-up/employee-list/employee-list.component';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './sign-up/shared/employee.service';

import { AngularFireAuthModule } from 'angularfire2/auth';
const ROUTES: Routes=[
  {path:'' ,component: HomeComponent},
  {path:'log-in',component: LogInComponent},
  {path:'sign-up',component: SignUpComponent},
  {path:'contact-person',component:ContactPersonComponent}
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    ContactPersonComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
