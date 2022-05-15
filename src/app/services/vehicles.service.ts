import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/Vehicle'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  API_URL = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }

  getVehicles() {
    return this.httpClient.get(`${this.API_URL}/vehicles`);
  }

  getVehicle(id: string){
    return this.httpClient.get(`${this.API_URL}/vehicles/${id}`)
  }

  createVehicle(vehicle:Vehicle){
    return this.httpClient.post(`${this.API_URL}/vehicles`, vehicle);
  } 

  updateVehicle(id: string|number, updatedVehicle: Vehicle){
    return this.httpClient.put(`${this.API_URL}/vehicles/${id}`, updatedVehicle);
  }

  deleteVehicle(id: string){
    return this.httpClient.delete(`${this.API_URL}/vehicles/${id}`)
  }

}
