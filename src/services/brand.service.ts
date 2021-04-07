import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/models/brand';
import { ListResponseModel } from 'src/models/listResponseModel';
import { ObjectResponseModel } from 'src/models/objectResponseModel';
import { ResponseModel } from 'src/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44307/api/brands/"
 constructor(private httpClient:HttpClient) { }

 getBrands():Observable<ListResponseModel<Brand>>{
  let newPath=this.apiUrl+"getall"
   return this.httpClient.get<ListResponseModel<Brand>>(newPath)
     
   };
   add(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"add"
  return this.httpClient.post<ResponseModel>(newPath,brand)
  }
  update(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"update"
  return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  getBrandById(brandId:number):Observable<ObjectResponseModel<Brand>>{
    let newPath=this.apiUrl+"getbyid?id="+brandId
    return this.httpClient.get<ObjectResponseModel<Brand>>(newPath)
      
    };
}
