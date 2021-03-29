import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/models/car';
import { ListResponseModel } from 'src/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})

//

export class CarService {

  apiUrl="https://localhost:44307/api/"
  constructor(private httpClient:HttpClient) { }
 
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getdetaildto"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
      
    };

    getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getallbybrandid?brandId="+brandId
      return this.httpClient.get<ListResponseModel<Car>>(newPath)
        
      };

      getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
        let newPath=this.apiUrl+"cars/getallbycolorid?colorId="+colorId
        return this.httpClient.get<ListResponseModel<Car>>(newPath)
          
        };

        //cars/getfiltercar?brandId=2&&colorId=3

        getCarsFilter(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
          let newPath=this.apiUrl+"cars/getfiltercar?brandId="+brandId+"&&colorId="+colorId
          return this.httpClient.get<ListResponseModel<Car>>(newPath)
            
          };
}


