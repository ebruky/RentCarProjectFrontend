import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/models/carImage';
import { ResponseModel } from 'src/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl="https://localhost:44307/api/carimages/"
  constructor(private httpClient:HttpClient) { }

  add(image: File,carImage:CarImage):Observable<ResponseModel>{
    const Image = new FormData();

    Image.append('file', image);
    
    let newPath=this.apiUrl+"add"
  return this.httpClient.post<ResponseModel>(newPath,Image&&carImage)
  }

}
