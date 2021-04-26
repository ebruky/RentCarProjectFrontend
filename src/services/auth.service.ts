import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/models/loginModel';
import { ObjectResponseModel } from 'src/models/objectResponseModel';
import { RegisterModel } from 'src/models/registerModel';
import { TokenModel } from 'src/models/tokenModel';
import { UserUpdateModel } from 'src/models/userUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44307/api/auth/"
  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel):Observable<ObjectResponseModel<TokenModel>>{
    let newPath=this.apiUrl+"login"
return this.httpClient.post<ObjectResponseModel<TokenModel>>(newPath,user)
  }

  register(user:RegisterModel):Observable<ObjectResponseModel<TokenModel>>{
    let newPath=this.apiUrl+"register"
return this.httpClient.post<ObjectResponseModel<TokenModel>>(newPath,user)
  }

  update(user:UserUpdateModel):Observable<ObjectResponseModel<TokenModel>>{
    let newPath=this.apiUrl+"update"
return this.httpClient.post<ObjectResponseModel<TokenModel>>(newPath,user)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
