import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';
import { LoadDataService } from '../load-data.service';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

customerToBeAdded:Customer = new Customer();
customer:FirebaseListObservable<any[]>;
listOfAllCustomers = [];

loginId:string;
loginPassword:string;

constructor(public db: AngularFireDatabase, private loadData : LoadDataService, private router : Router) {
    this.customer = db.list('/ListOfCustomers');
   }
arr1=[];
  ngOnInit() {
    $(document).ready(function() {
    $('.modal').modal();
  
    }
    );
  this.loadData.fetchCustomers().subscribe(
    (data) => {
      var arr2 = data;
    
  this.arr1 = arr2;
console.log(this.arr1);
this.listOfAllCustomers = $.map(this.arr1, function(el) { return el })
console.log(this.listOfAllCustomers);
}    
    
    );
}
  
addCustomer(){
  console.log(this.customerToBeAdded);
  this.customerToBeAdded.cart = ['0'];
  this.customerToBeAdded.wishList = ['0']
  this.customer.push(this.customerToBeAdded);
}

authorize(){
  for(var i=0;i<this.listOfAllCustomers.length;i++){
    if(this.loginId === this.listOfAllCustomers[i].displayName){
      if(this.loginPassword === this.listOfAllCustomers[i].password){
        console.log("login Success");
        this.loadData.loggedInCustomer = this.listOfAllCustomers[i];
        this.router.navigate(['all-products-page']);
        break;
      }
    }else{
      console.log("login failure");
    }
  }
}
}
