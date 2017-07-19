import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  items: FirebaseListObservable<any[]>;

  product: FirebaseObjectObservable<any[]>;

  product1: FirebaseObjectObservable<any[]>;
  product2: FirebaseObjectObservable<any[]>;
  
call(){
  this.items.push('qwerryipri');
}
  
allProducts:Array<FirebaseObjectObservable<any[]>>=[];
  constructor(db: AngularFireDatabase) {

for(var i=0;i<2;i++){
  this.allProducts.push(db.object('/Products/product'+i));
}

    this.items = db.list('/items');
    this.product = db.object('/Products');
   

console.log(this.items);

 }


ngOnInit(){

}
}
