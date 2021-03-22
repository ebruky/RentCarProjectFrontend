import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/models/car';
import { ObjectResponseModel } from 'src/models/objectResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  apiUrl="https://localhost:44307/api/"
  constructor(private httpClient:HttpClient) { }

  getCarsDetailByCarId(carId:number):Observable<ObjectResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyid?id="+carId
    return this.httpClient.get<ObjectResponseModel<Car>>(newPath)
      
    };
}
