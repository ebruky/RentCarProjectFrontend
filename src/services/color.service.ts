import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/models/color';
import { ListResponseModel } from 'src/models/listResponseModel';
import { ObjectResponseModel } from 'src/models/objectResponseModel';
import { ResponseModel } from 'src/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
 
 apiUrl="https://localhost:44307/api/colors/"
 constructor(private httpClient:HttpClient) { }

 getColors():Observable<ListResponseModel<Color>>{
  let newPath=this.apiUrl+"getall"
   return this.httpClient.get<ListResponseModel<Color>>(newPath)
     
   };
   add(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"add"
  return this.httpClient.post<ResponseModel>(newPath,color)
  }

  update(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"update"
  return this.httpClient.post<ResponseModel>(newPath,color)
  }

  getColorById(colorId:number):Observable<ObjectResponseModel<Color>>{
    let newPath=this.apiUrl+"getbyid?id="+colorId
    return this.httpClient.get<ObjectResponseModel<Color>>(newPath)
      
    };
}
