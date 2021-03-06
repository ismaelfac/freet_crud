import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from 'src/app/models/Route';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrls: ['./routes-form.component.css']
})
export class RoutesFormComponent implements OnInit {
  routerForm: any = {
    driver_id:  0,
    vehicle_id: 0,
    description: ''
  };
  editing: boolean = false;
  constructor(private routerService: RoutesService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params['id']){
      this.editing = true;
      this.routerService.getRoute(params['id']).subscribe(
        res => {
          console.log(res);
          this.routerForm = res;
        },
        err => console.error(err)
      )
    }
  }

  createRoute(){
    this.routerService.createRoute(this.routerForm).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/routers']);
      },
      err => console.log(err)
    );
  }

  updateRoute(){
    this.routerService.updateRoute(this.routerForm.id, this.routerForm).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/routers']);
      },
      err => console.error(err)
    )
  }


}
