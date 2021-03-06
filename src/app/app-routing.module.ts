import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriverComponent } from './components/driver/driver.component';
import { FormsComponent } from './components/driver/forms/forms.component';
import { VehiclesFormComponent} from './components/vehicles/vehicles-form/vehicles-form.component'
import { RoutesComponent } from './components/routes/routes.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { RoutesFormComponent } from './components/routes/routes-form/routes-form.component';
import { SchedulerFormComponent } from './components/scheduler/scheduler-form/scheduler-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {  path: '', component: DashboardComponent, pathMatch: "full" },
  {  path: 'drivers', component: DriverComponent },
  {  path: 'drivers/create', component: FormsComponent },
  {  path: 'drivers/edit/:id', component: FormsComponent },
  {  path: 'vehicles', component: VehiclesComponent },
  {  path: 'vehicles/create', component: VehiclesFormComponent },
  {  path: 'vehicles/edit/:id', component: VehiclesFormComponent },
  {  path: 'routes', component: RoutesComponent },
  {  path: 'routes/create', component: RoutesFormComponent },
  {  path: 'routes/edit/:id', component: RoutesFormComponent },
  {  path: 'schedulers', component: SchedulerComponent },
  {  path: 'schedulers/create', component: SchedulerFormComponent },
  {  path: 'schedulers/edit/:id', component: SchedulerFormComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
