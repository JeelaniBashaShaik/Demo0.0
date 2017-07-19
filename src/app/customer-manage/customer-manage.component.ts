import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { Customer } from '../models/customer';
import { Address } from '../models/address';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
declare var $:any;
@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrls: ['./customer-manage.component.css']
})
export class CustomerManageComponent implements OnInit {

ListOfCustomers:FirebaseListObservable<any[]>
loggedInCustomer:Customer = new Customer();
selectedItemToUpdate:string;
address:Address = new Address();
allCustomerItems:Array<string> = ['fullName','password','email','phoneNumber','address'];
 query:any;
 selectedDisplayNameToUpdate:string;
  constructor(private loadData : LoadDataService, public db: AngularFireDatabase) { 
     this.ListOfCustomers = db.list('/ListOfCustomers');
  }

  ngOnInit() {
    this.loggedInCustomer = this.loadData.loggedInCustomer;
    console.log(this.loggedInCustomer);
    this.selectedDisplayNameToUpdate = this.loggedInCustomer.displayName;
    console.log(this.selectedDisplayNameToUpdate);
}

selectItem(id){
  this.selectedItemToUpdate =id;
  console.log("Item Selected");
}
updateCustomer(changedValue, selectedItemToUpdate){
 // if(selectedItemToUpdate === 'fullName'){
    this.updateFullName(changedValue);
  //}
 // else{
   // console.log("not found");
  //}
}
updateFullName(changedValue){
  this.query= this.db.database.ref('/ListOfCustomers').orderByChild('displayName').equalTo(this.selectedDisplayNameToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ fullName : changedValue })
})

}

updateDisplayName(){

}

updatePassword(){

}

updateEmail(){

}

updatePhoneNumber(){

}

updateAddress(){

}

addAddress(){

}
}
