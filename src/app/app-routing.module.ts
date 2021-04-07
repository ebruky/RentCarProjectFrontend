import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from 'src/components/brand-add/brand-add.component';
import { BrandUpdateComponent } from 'src/components/brand-update/brand-update.component';
import { CarAddComponent } from 'src/components/car-add/car-add.component';
import { CarDetailComponent } from 'src/components/car-detail/car-detail.component';
import { CarUpdateComponent } from 'src/components/car-update/car-update.component';
import { CarComponent } from 'src/components/car/car.component';
import { ColorAddComponent } from 'src/components/color-add/color-add.component';
import { ColorUpdateComponent } from 'src/components/color-update/color-update.component';
import { CustomerComponent } from 'src/components/customer/customer.component';
import { PaymentComponent } from 'src/components/payment/payment.component';
import { RentalComponent } from 'src/components/rental/rental.component';

const routes: Routes = [{path:"",pathMatch:"full", component:CarComponent},
{path:"cars", component:CarComponent},
{path:"customers", component:CustomerComponent},
{path:"rentals", component:RentalComponent},
{path:"cars/brand/:brandId", component:CarComponent},
{path:"cars/color/:colorId", component:CarComponent},
{path:"cars/detail/:carId", component:CarDetailComponent},
{path:"car-update/:carId", component:CarUpdateComponent},
{path:"brand-update/:brandId", component:BrandUpdateComponent},
{path:"color-update/:colorId", component:ColorUpdateComponent},
{path:"cars/brand/:brandId/color/:colorId", component:CarComponent},
{path:"payment/:rental",component:PaymentComponent},
{path:"brand-add",component:BrandAddComponent},
{path:"color-add",component:ColorAddComponent},
{path:"car-add",component:CarAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
