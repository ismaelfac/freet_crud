import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/Route';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {
  listRoutes: any = [];
  constructor(private routesService: RoutesService) { }

  ngOnInit(): void {
    this.getRoute();
  }

  getRoute(){
    this.routesService.getRoutes().subscribe(
      res => {
        this.listRoutes = res;
      },
      err => console.log(err)
    );
  }

  deleteRoute(id:string){
    this.routesService.deleteRoute(id).subscribe(
      res => {
        this.getRoute();
      },
      err => console.log(err)
    );
  }

}
