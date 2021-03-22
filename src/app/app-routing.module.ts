import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from 'src/components/car-detail/car-detail.component';
import { CarComponent } from 'src/components/car/car.component';
import { CustomerComponent } from 'src/components/customer/customer.component';
import { RentalComponent } from 'src/components/rental/rental.component';

const routes: Routes = [{path:"",pathMatch:"full", component:CarComponent},
{path:"cars", component:CarComponent},
{path:"customers", component:CustomerComponent},
{path:"rentals", component:RentalComponent},
{path:"cars/brand/:brandId", component:CarComponent},
{path:"cars/color/:colorId", component:CarComponent},
{path:"cars/detail/:carId", component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
