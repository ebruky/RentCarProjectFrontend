import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrandComponent } from 'src/components/brand/brand.component';
import { CarComponent } from 'src/components/car/car.component';
import { ColorComponent } from 'src/components/color/color.component';
import { CustomerComponent } from 'src/components/customer/customer.component';
import { NaviComponent } from 'src/components/navi/navi.component';
import { RentalComponent } from 'src/components/rental/rental.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from 'src/components/car-detail/car-detail.component';


import { CarPipePipe } from './pipes/car-pipe.pipe';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { RentalAddComponent } from 'src/components/rental-add/rental-add.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    RentalComponent,
    CustomerComponent,
    ColorComponent,
    NaviComponent,
    CarDetailComponent,
    RentalAddComponent,
    
    CarPipePipe,
    BrandPipePipe,
    ColorPipePipe
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
