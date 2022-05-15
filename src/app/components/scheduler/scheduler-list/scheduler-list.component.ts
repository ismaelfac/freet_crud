import { Component, OnInit } from '@angular/core';
import { Scheduler } from 'src/app/models/Scheduler';
import { SchedulersService } from 'src/app/services/schedulers.service';

@Component({
  selector: 'scheduler-list',
  templateUrl: './scheduler-list.component.html',
  styleUrls: ['./scheduler-list.component.css']
})
export class SchedulerListComponent implements OnInit {
  schedulerList: any = [];
  constructor(private schedulerService: SchedulersService) { }

  ngOnInit(): void {
    this.getSchedulers();
  }

  getSchedulers(){
    this.schedulerService.getSchedulers().subscribe(
      res => {
        this.schedulerList = res;
      },
      err => console.log(err)
    );
  }
  deleteSchedulers(id:string){
    this.schedulerService.deleteScheduler(id).subscribe(
      res => {
        this.getSchedulers();
      },
      err => console.log(err)
    );
  }

}
