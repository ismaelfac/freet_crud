import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/Driver';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'forms-drivers',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  driver: any = {
    first_name:  '',
    last_name: '',
    ssn: '',
    dob: '',
    address: '',
    city: '',
    zip: '',
    phone: ''
  };
  editing: boolean = false;

  constructor(private driverService: DriversService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params['id']){
      this.editing = true;
      this.driverService.getDriver(params['id']).subscribe(
        res => {
          console.log(res);
          this.driver = res;
        },
        err => console.error(err)
      )
    }
    
  }

  createDriver(){
    this.driverService.createDriver(this.driver).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/drivers']);
      },
      err => console.log(err)
    );
  }

  updateDriver(){
    this.driverService.updateDriver(this.driver.id, this.driver).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/drivers']);
      },
      err => console.error(err)
    )
  }

}
