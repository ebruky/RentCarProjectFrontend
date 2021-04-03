import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/models/listResponseModel';
import { Rental } from 'src/models/rental';
import { ResponseModel } from 'src/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44307/api/rentals/"
  constructor(private httpClient:HttpClient) { }
 
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"getrentaldetail"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
      
    };

    checkCar(carId:number):Observable<ListResponseModel<Rental>>{
      let newPath=this.apiUrl+"checkcar?carId="+carId
      return this.httpClient.get<ListResponseModel<Rental>>(newPath)
        
      };
      add(rental:Rental):Observable<ResponseModel>{
        let newPath=this.apiUrl+"add"
      return this.httpClient.post<ResponseModel>(newPath,rental)
      }

}
