import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent implements OnInit {
  vehicle: any = {
    description:  '',
    year: '',
    make: '',
    capacity: ''
  };
  editing: boolean = false;
  constructor(private vehicleService: VehiclesService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params['id']){
      this.editing = true;
      this.vehicleService.getVehicle(params['id']).subscribe(
        res => {
          console.log(res);
          this.vehicle = res;
        },
        err => console.error(err)
      )
    }
  }

  createVehicle(){
    this.vehicleService.createVehicle(this.vehicle).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/vehicles']);
      },
      err => console.log(err)
    );
  }

  updateVehicle(){
    this.vehicleService.updateVehicle(this.vehicle.id, this.vehicle).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/vehicles']);
      },
      err => console.error(err)
    )
  }

}
