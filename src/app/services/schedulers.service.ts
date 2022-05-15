import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scheduler } from '../models/Scheduler';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SchedulersService {
  API_URL = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }

  getSchedulers() {
    return this.httpClient.get(`${this.API_URL}/schedulers`);
  }

  getScheduler(id: string){
    return this.httpClient.get(`${this.API_URL}/schedulers/${id}`)
  }

  createScheduler(scheduler:Scheduler){
    return this.httpClient.post(`${this.API_URL}/schedulers`, scheduler);
  } 

  updateScheduler(id: string|number, updatedScheduler: Scheduler){
    return this.httpClient.put(`${this.API_URL}/schedulers/${id}`, updatedScheduler);
  }

  deleteScheduler(id: string){
    return this.httpClient.delete(`${this.API_URL}/schedulers/${id}`)
  }
}
