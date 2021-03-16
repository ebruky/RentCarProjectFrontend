import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrandComponent } from 'src/components/brand/brand.component';
import { CarComponent } from 'src/components/car/car.component';
import { ColorComponent } from 'src/components/color/color.component';
import { CustomerComponent } from 'src/components/customer/customer.component';
import { NaviComponent } from 'src/components/navi/navi.component';
import { RentalComponent } from 'src/components/rental/rental.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    RentalComponent,
    CustomerComponent,
    ColorComponent,
    NaviComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
