import { Component, OnInit , ElementRef} from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { Product } from '../models/product';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

declare var $:any;
declare var Materialize :any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
allProductIds:Array<string> = [];
allProductProperties:Array<string> = ['productId','productImage','productCurrentPrice','productShortDescription','productLongDescription','productCategory',
'productViews','timeSpentViewing','productWishes','productFeatures','productBrand','productComments','productRating'];
selectedIdToUpdate:string;
selectedPropertyToUpdate:string;
productToBeAdded:Product = new Product();
changedValue:string;
productId:String;
 query:any;
 arr1:Observable<any>;;
 users=[];
products: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase,private loadData: LoadDataService, public elementRef : ElementRef) {
    /*this.products = db.list('/Products');*/
    this.products = db.list('/Products');
}

updateProductCurrentPrice(changedValue, selectedPropertyToUpdate){
  this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.selectedIdToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productCurrentPrice : changedValue })
})
}

updateProductId(changedValue, selectedPropertyToUpdate){
  this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.selectedIdToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productId : changedValue })
})
}

updateProductImage(changedValue, selectedPropertyToUpdate){
  this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.selectedIdToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productImage : changedValue })
})
}

updateShortDescription(changedValue, selectedPropertyToUpdate){
  this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.selectedIdToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productShortDescription : changedValue })
})
}

updateLongDescription(changedValue, selectedPropertyToUpdate){
  this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.selectedIdToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productLongDescription : changedValue })
})
}

updateCategory(changedValue, selectedPropertyToUpdate){
  this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.selectedIdToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productCategory : changedValue })
})
}

updateProductBrand(changedValue, selectedPropertyToUpdate){
  this.query= this.db.database.ref('/Products').orderByChild('productId').equalTo(this.selectedIdToUpdate);
  var x = this.query.once("child_added", function(snapshot) {
  snapshot.ref.update({ productBrand : changedValue })
})
}

updateProduct(changedValue, selectedPropertyToUpdate){
  if(selectedPropertyToUpdate === 'productCurrentPrice'){
    this.updateProductCurrentPrice(changedValue, selectedPropertyToUpdate);
  }
  else if(selectedPropertyToUpdate === 'productId'){
    this.updateProductId(changedValue, selectedPropertyToUpdate);
  }
  else if(selectedPropertyToUpdate === 'productImage'){
    this.updateProductImage(changedValue, selectedPropertyToUpdate);
  }
  else if(selectedPropertyToUpdate === 'productShortDescription'){
    this.updateShortDescription(changedValue, selectedPropertyToUpdate);
  }
  else if(selectedPropertyToUpdate === 'productLongDescription'){
    this.updateLongDescription(changedValue, selectedPropertyToUpdate);
  }
  else if(selectedPropertyToUpdate === 'productCategory'){
    this.updateCategory(changedValue, selectedPropertyToUpdate);
  }
   else if(selectedPropertyToUpdate === 'productBrand'){
    this.updateProductBrand(changedValue, selectedPropertyToUpdate);
  }
  var grid =  this.elementRef.nativeElement.querySelector("#grid2");
  grid.refreshItems();
}
selectId(val){
  this.selectedIdToUpdate = val;
  console.log(this.selectedIdToUpdate);
}
selectProperty(val){
  this.selectedPropertyToUpdate = val;
  console.log(this.selectedPropertyToUpdate);
}
addProduct(){
  if(this.productToBeAdded != null){
 console.log(this.productToBeAdded);
 this.productToBeAdded.productInCarts = 0;
 this.productToBeAdded.productInWishLists = 0;
 this.products.push(this.productToBeAdded);
  Materialize.toast('Product Added Successfully', 2000)
}
else{
   Materialize.toast('Please enter proper details', 2000)
}
}
grid:any;
ngOnInit(){
  //this.allProductIds = this.loadData.allProductIds;
 
 
  
  $(document).ready(function() {
  $('.modal').modal();
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
       
;
});

 this.loadData.fetchData().subscribe(
    (data) => {
      var arr2:Observable<any[]> = data;
    
  this.arr1 = arr2;
console.log(this.arr1);
this.users = $.map(this.arr1, function(el) { return el })
console.log(this.users);
for(var i=0;i<this.users.length;i++){
this.allProductIds.push(this.users[i].productId)
}

    });

console.log(this.allProductIds);
}


}
