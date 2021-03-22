import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/models/customer';
import { ListResponseModel } from 'src/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44307/api/customers/getcustomerdetail"
  constructor(private httpClient:HttpClient) { }
 
  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
      
    };
}
