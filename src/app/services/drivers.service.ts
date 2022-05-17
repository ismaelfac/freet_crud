import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../models/Driver'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DriversService {
  API_URL = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }

  getDrivers() {
    return this.httpClient.get(`${this.API_URL}/drivers`);
  }

  getDriver(id: string){
    return this.httpClient.get(`${this.API_URL}/drivers/${id}`)
  }

  getDriverFullName() {
    return this.httpClient.get(`${this.API_URL}/getDriverFullName`)
  }

  createDriver(driver:Driver){
    return this.httpClient.post(`${this.API_URL}/drivers`, driver);
  } 

  updateDriver(id: string|number, updatedDriver: Driver){
    return this.httpClient.put(`${this.API_URL}/drivers/${id}`, updatedDriver);
  }

  deleteDriver(id: string){
    return this.httpClient.delete(`${this.API_URL}/drivers/${id}`)
  }

}
