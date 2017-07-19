import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadDataService } from '../load-data.service';
import { LoadProductService } from '../load-product.service';
import { Product } from '../models/product';
import { Customer } from '../models/customer';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
declare var $:any;
declare var firebase:any;
declare var Materialize:any;
@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.css']
})
export class SpecificProductComponent implements OnInit, OnDestroy {

  constructor(public db: AngularFireDatabase,private router: Router, private route: ActivatedRoute,private loadData: LoadDataService, private loadProduct: LoadProductService) { }

 id: string;
  private sub: any;
 
products1 = [];
productToBeDisplayed:Product;
loggedInCustomer:Customer = new Customer(); 
query;
name:any;

goTo(){
  this.router.navigate(['customer-manage']);
}
  ngOnInit() {

console.log('asdfasdf');
    this.productToBeDisplayed = this.loadProduct.getProduct();    
   
console.log(this.productToBeDisplayed);   

this.loggedInCustomer = $.map(this.loadData.loggedInCustomer, function(el) { return el })
console.log(this.loggedInCustomer);
//console.log(this.products1)
//console.log(this.loadData.loggedInCustomer.cart);
//console.log(this.loggedInCustomer.displayName);
 for(var i=0;i<this.loadData.loggedInCustomer.cart.length;i++){
   this.customerCart.push(this.loadData.loggedInCustomer.cart[i]);
 }
  for(var i=0;i<this.loadData.loggedInCustomer.wishList.length;i++){
   this.customerWishList.push(this.loadData.loggedInCustomer.wishList[i]);
 }
 
this.InCarts = this.productToBeDisplayed.productInCarts;
this.inWishLists = this.productToBeDisplayed.productInWishLists;
 console.log(this.customerCart);
 console.log(this.customerWishList);
 }
customerName = this.loadData.loggedInCustomer.displayName;
customerCart:Array<string>=[];
customerWishList:Array<string>=[];
InCarts:number;
inWishLists:number;
checkCart:boolean;
checkWishList:boolean;

saveToCart(customerCart,InCarts){

  for(var i=0;i<this.customerCart.length;i++){
    if(this.customerCart[i] == this.productToBeDisplayed.productId){
       Materialize.toast('Product Already in Cart', 2000);
       break;
    }else{
this.customerCart.push(this.productToBeDisplayed.productId);
  InCarts++;
  Materialize.toast('Product Addedd To Cart', 2000);
  break;
    }
  }
  
console.log(this.productToBeDisplayed);
this.query= this.db.database.ref('/ListOfCustomers').orderByChild('displayName').equalTo(this.customerName);
var x = this.query.once("child_added", function(snapshot) {
console.log(customerCart);
  snapshot.ref.update({ cart : customerCart })
});


this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.productToBeDisplayed.productId);
console.log(InCarts);
var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productInCarts : InCarts })
});

}

saveToWishList(customerWishList, inWishLists){
  inWishLists++;
  this.customerWishList.push(this.productToBeDisplayed.productId);
this.query= this.db.database.ref('/ListOfCustomers').orderByChild('displayName').equalTo(this.customerName);
var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ wishList : customerWishList })
});

this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.productToBeDisplayed.productId);
var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productInWishLists : inWishLists })
});
}
ngOnDestroy(){

}
}
