import { Component, OnInit  } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { LoadProductService } from '../load-product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

declare var $:any;



@Component({
  selector: 'app-all-products-page',
  templateUrl: './all-products-page.component.html',
  styleUrls: ['./all-products-page.component.css']
})
export class AllProductsPageComponent implements OnInit {

arr1:Observable<any>;
items: Observable<any[]>;
productsToBeDisplayed = [];
productToBePassed:Product;
  constructor(private router: Router,private loadData: LoadDataService, private loadProduct: LoadProductService) { }

/*users = [
  { "userId": 111,  "name": "Kunal",   "sport": "VolleyBall", "fitness":"UnFit" },
 { "userId": 212,  "name": "Sheldon",   "sport": "Badminton", "fitness":"Fit" },
  { "userId": 313,  "name": "Penny",   "sport": "Shuttle", "fitness":"UnFit" },
   { "userId": 414,  "name": "Howard",   "sport": "Tennis", "fitness":"Fit" },
    { "userId": 515,  "name": "Bernadette",   "sport": "Carroms", "fitness":"Fit" }


];*/

users = [];


/*goToSpecificProduct(x){
this.router.navigate(['specific-product',x]);
}*/


passThisProduct(product){
  console.log(product);
this.loadProduct.setProduct(product);
this.router.navigate(['specific-product']);
}

  ngOnInit() {
  this.loadData.fetchData().subscribe(
    (data) => {
      var arr2:Observable<any[]> = data;
    
  this.arr1 = arr2;
console.log(this.arr1);
this.productsToBeDisplayed = $.map(this.arr1, function(el) { return el })
console.log(this.productsToBeDisplayed);
this.users = this.productsToBeDisplayed;
console.log(this.users);
var productIds:Array<string>=[];
for(var i=0;i<this.users.length;i++){
productIds.push(this.users[i].productId)
}

this.loadData.allProductIds = productIds;
console.log(this.loadData.allProductIds);
}    
    
    );
}


}
