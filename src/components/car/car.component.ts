import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/models/brand';
import { Car } from 'src/models/car';
import { CarModel } from 'src/models/carModel';
import { Color } from 'src/models/color';
import { BrandService } from 'src/services/brand.service';
import { CarService } from 'src/services/car.service';
import { ColorService } from 'src/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  url: string = 'https://localhost:44307';
  empty: boolean = false;
  dataLoaded:boolean=false;
  carModel:CarModel
  carText: string = '';
 
  
brandId: number;
colorId: number;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      }
      if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      }
      if (params['brandId']&&params['colorId']) {
        this.getCarsFilter(params['brandId'],params['colorId']);
      }
       else {
        this.getCars();
      
      }
    });
    this.getBrands();
    this.getColors();

    
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      if (this.cars.length == 0) {
        this.empty = true;
      } else {
        this.empty = false;
      }
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      if (this.cars.length == 0) {
        this.empty = true;
      } else {
        this.empty = false;
      }
    });
  }
  getCarsFilter(brandId: number, colorId: number) {
    this.carService.getCarsFilter(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }
 
}
