import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AllProductsPageComponent } from './all-products-page/all-products-page.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClockComponent } from './clock/clock.component';
import { LoginComponent } from './login/login.component';
import { CustomerManageComponent } from './customer-manage/customer-manage.component';

const appRoutes: Routes = [
    {path: 'admin', component:AdminComponent },
    {path: 'clock', component:ClockComponent },
    {path: 'all-products-page', component:AllProductsPageComponent },
    {path: 'specific-product', component:SpecificProductComponent },
    {path: 'login', component:LoginComponent },
    {path: 'customer-manage', component: CustomerManageComponent },
    {path: '', component:HomePageComponent },
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}