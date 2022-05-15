import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/Driver';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'forms-drivers',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  driver: Driver = {
    first_name:  '',
    last_name: '',
    ssn: '',
    dob: '',
    address: '',
    city: '',
    zip: '',
    phone: ''
  };
  constructor(private driverService: DriversService, private router: Router) { }

  ngOnInit(): void {
  }

  createOnUpdate(){
    this.driverService.createDriver(this.driver).subscribe(
      res => {
        this.router.navigate(['/drivers']);
      },
      err => console.log(err)
    );
  }

}
