import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/Driver';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'list-driver',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listDrivers: any = [];
  constructor(private driversService: DriversService) { }
  
  ngOnInit(): void {
    this.getDriver();
  }

  getDriver(){
    this.driversService.getDrivers().subscribe(
      res => {
        this.listDrivers = res;
      },
      err => console.log(err)
    );
  }

  deleteDriver(id:string){
    this.driversService.deleteDriver(id).subscribe(
      res => {
        this.getDriver();
      },
      err => console.log(err)
    );
  }

}
