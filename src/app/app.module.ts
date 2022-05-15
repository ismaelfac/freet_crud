import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriverComponent } from './components/driver/driver.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { FormsComponent } from './components/driver/forms/forms.component';
import { ListComponent } from './components/driver/list/list.component';


import { DriversService } from './services/drivers.service'
import { HttpClientModule } from '@angular/common/http';
import { VehiclesFormComponent } from './components/vehicles/vehicles-form/vehicles-form.component';
import { VehiclesListComponent } from './components/vehicles/vehicles-list/vehicles-list.component';
import { RoutesFormComponent } from './components/routes/routes-form/routes-form.component';
import { RoutesListComponent } from './components/routes/routes-list/routes-list.component';
import { LoginComponent } from './components/login/login.component';
import { SchedulerFormComponent } from './components/scheduler/scheduler-form/scheduler-form.component';
import { SchedulerListComponent } from './components/scheduler/scheduler-list/scheduler-list.component';
import { RegisterComponent } from './components/register/register.component';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    DriverComponent,
    VehiclesComponent,
    RoutesComponent,
    SchedulerComponent,
    FormsComponent,
    ListComponent,
    VehiclesFormComponent,
    VehiclesListComponent,
    RoutesFormComponent,
    RoutesListComponent,
    LoginComponent,
    SchedulerFormComponent,
    SchedulerListComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DriversService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
