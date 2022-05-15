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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DriversService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
