import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';
@Component({
  selector: 'vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  listVehicles: any = [];
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle(){
    this.vehiclesService.getVehicles().subscribe(
      res => {
        this.listVehicles = res;
      },
      err => console.log(err)
    );
  }

  deleteVehicle(id:string){
    this.vehiclesService.deleteVehicle(id).subscribe(
      res => {
        this.getVehicle();
      },
      err => console.log(err)
    );
  }

}
