import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from './attributes';
import { LoadDataService } from '../load-data.service';

import { User } from './user';
declare var HTMLImports:any;
declare var $:any;

@Component({
  selector: 'app-vaadin-grid',
  templateUrl: './vaadin-grid.component.html',
  styleUrls: ['./vaadin-grid.component.css']
})
export class VaadinGridComponent implements OnInit {

array1:Array<Hero>;
  heroes: Hero[];
  users = [
  { "userId": 111,  "name": "Kunal",   "sport": "VolleyBall", "fitness":"UnFit" },
 { "userId": 212,  "name": "Sheldon",   "sport": "Badminton", "fitness":"Fit" },
  { "userId": 313,  "name": "Penny",   "sport": "Shuttle", "fitness":"UnFit" },
   { "userId": 414,  "name": "Howard",   "sport": "Tennis", "fitness":"Fit" },
    { "userId": 515,  "name": "Bernadette",   "sport": "Carroms", "fitness":"Fit" }


];


  constructor(private loadData: LoadDataService) { }


  ngOnInit() {
this.loadData.fetchData();
  }
 
ngAfterViewInit(){
  //this.update();
}

update(){
  //this.notificationsComponent.myCalls();
}


 
   onSelect(hero: Hero) {
   
  
  
}


public myHeroesIndices:Array<number>=[];
public gridSelectedValues:Array<Hero>=[];


public myheroes:Array<Hero>=[];
public myusers:Array<User>=[];

currentSelection:any;
  onSelectedItemsChanged(event: any) {

    let selectedIndex: number = event.target.selection.selected()[0];
    if (selectedIndex !== undefined) {
      this.currentSelection = selectedIndex;
     //this.onSelect(this.heroes[selectedIndex]);
  
        console.log(this.currentSelection);
        this.myHeroesIndices = event.target.selection.selected();
        for(var i=0;i<this.myHeroesIndices.length;i++)
          {   
             this.gridSelectedValues[i] = this.heroes[this.myHeroesIndices[i]];
          }
          console.log(this.gridSelectedValues);
          console.log(this.myHeroesIndices);
      this.myheroes = this.gridSelectedValues;
        this.gridSelectedValues = [];
     var  grid = document.querySelector('#grid1');
   
   
   //    grid.refreshItems();

       
    // button enable with jquery   
       $('#sample').prop("disabled",false);
       $('#delegate').prop("disabled",false);
      
//span.innerHTML = '<button id="but' + inc +'" onclick="callJavascriptFunction()" />';

        
    }else{

         // button disable with jquery
           $('#sample').prop("disabled",true);
           $('#delegate').prop("disabled",true);
      
    }
   
  }
public myUsersIndices:any;
public userSelectedValues:Array<User>=[];
  onSelectedUsersChanged(event: any) {

    let selectedIndex: number = event.target.selection.selected()[0];
    if (selectedIndex !== undefined) {
      this.currentSelection = selectedIndex;
     //this.onSelect(this.heroes[selectedIndex]);
   //  console.log(event.target.selection);
        console.log(this.currentSelection);
        this.myUsersIndices = event.target.selection.selected();
        for(var i=0;i<this.myUsersIndices.length;i++)
          {   
             this.userSelectedValues[i] = this.users[this.myUsersIndices[i]];
          }
          console.log(this.userSelectedValues);
          console.log(this.myUsersIndices);
         this.myusers = this.userSelectedValues;
         this.userSelectedValues = [];
       
    // button enable with jquery   
       $('#sample').prop("disabled",false);
      
//span.innerHTML = '<button id="but' + inc +'" onclick="callJavascriptFunction()" />';

        
    }else{

         // button disable with jquery
           $('#sample').prop("disabled",true);
      
    }
   
  }



}



