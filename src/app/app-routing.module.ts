import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriversComponent } from './drivers/drivers.component';
import { RoutesComponent } from './routes/routes.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {  path: '', component: DashboardComponent },
  {  path: 'vehicles', component: VehiclesComponent },
  {  path: 'drivers', component: DriversComponent },
  {  path: 'routes', component: RoutesComponent },
  {  path: 'schedulers', component: SchedulersComponent },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
