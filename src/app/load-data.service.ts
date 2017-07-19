import { Customer } from './models/customer';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
@Injectable()
export class LoadDataService {

loggedInCustomer:Customer = new Customer();
allProductIds:Array<string>= [];
  constructor(private http:Http) { 
  
  }

fetchData(){
  return this.http.get('https://samplesite-dd655.firebaseio.com/Products.json').map(
    res => res.json()
  )
}


fetchCustomers(){
  return this.http.get('https://samplesite-dd655.firebaseio.com/ListOfCustomers.json').map(
  res => res.json()
  )
}
}
