import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../models/Route';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  API_URL = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }

  getRoutes() {
    return this.httpClient.get(`${this.API_URL}/routes`);
  }

  getRoute(id: string){
    return this.httpClient.get(`${this.API_URL}/routes/${id}`)
  }

  createRoute(route:Route){
    return this.httpClient.post(`${this.API_URL}/routes`, route);
  } 

  updateRoute(id: string|number, updatedRoute: Route){
    return this.httpClient.put(`${this.API_URL}/routes/${id}`, updatedRoute);
  }

  deleteRoute(id: string){
    return this.httpClient.delete(`${this.API_URL}/routes/${id}`)
  }
}
