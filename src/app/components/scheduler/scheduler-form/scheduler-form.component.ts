import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulersService } from 'src/app/services/schedulers.service';

@Component({
  selector: 'app-scheduler-form',
  templateUrl: './scheduler-form.component.html',
  styleUrls: ['./scheduler-form.component.css']
})
export class SchedulerFormComponent implements OnInit {
  listRoutes: any = [];
  constructor(private schedulerService: SchedulersService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }


}
