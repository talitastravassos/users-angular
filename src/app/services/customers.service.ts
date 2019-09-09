import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url = "http://private-92a969-processoseletivo1.apiary-mock.com/customers"

  constructor(private http: HttpClient) { }

  /* HTTP Requests */

  //get customers
  getCustomersList() {
    return this.http.get(this.url)
  }

}