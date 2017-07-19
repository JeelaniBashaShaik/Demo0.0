import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http } from '@angular/http';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { VaadinGridComponent } from './vaadin-grid/vaadin-grid.component';
import { AdminComponent } from './admin/admin.component';
import { environment } from '../environments/environment';
import { AllProductsPageComponent } from './all-products-page/all-products-page.component';

import { LoadDataService } from './load-data.service';
import { LoadProductService } from './load-product.service';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { LoginComponent } from './login/login.component';
import { CustomerManageComponent } from './customer-manage/customer-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    AdminComponent,
    AllProductsPageComponent,
    VaadinGridComponent,
    HomePageComponent,
    SpecificProductComponent,
    LoginComponent,
    CustomerManageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StarRatingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers:[AngularFireDatabase, LoadDataService, LoadProductService],
  bootstrap: [AppComponent]
})




export class AppModule { }
