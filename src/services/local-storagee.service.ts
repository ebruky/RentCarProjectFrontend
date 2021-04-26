import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { TokenModel } from 'src/models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageeService {

  constructor() { }

  AddLocalStorage(data:TokenModel) {
    
        localStorage.setItem("token",data.token)
        localStorage.setItem('firstname',data.user.firstName);
        localStorage.setItem('lastname', data.user.lastName);
        localStorage.setItem('email',data.user.email);
        localStorage.setItem('id', data.user.id.toString());
  }
  ReadLocalStorage(key:any) {
    localStorage.getItem(key);
  }
  RemoveLocalStorage(key:any) {
    localStorage.remove(key);
  }
  RemoveAllLocalStorage() {
    localStorage.clearAll();
  }

}
