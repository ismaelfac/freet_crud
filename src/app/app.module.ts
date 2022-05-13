import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriversComponent } from './drivers/drivers.component';
import { RoutesComponent } from './routes/routes.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './drivers/forms/forms.component';
import { ListComponent } from './drivers/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    DriversComponent,
    RoutesComponent,
    SchedulersComponent,
    DashboardComponent,
    FormsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
