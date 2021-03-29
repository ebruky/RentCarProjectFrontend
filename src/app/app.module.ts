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
import { CarDetailComponent } from 'src/components/car-detail/car-detail.component';

import { FormsModule } from '@angular/forms';
import { CarPipePipe } from './pipes/car-pipe.pipe';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';

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
    
    CarPipePipe,
    BrandPipePipe,
    ColorPipePipe
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
