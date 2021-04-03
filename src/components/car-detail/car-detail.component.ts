import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/models/car';
import { CarImage } from 'src/models/carImage';
import { CardetailService } from 'src/services/cardetail.service';
import { RentalService } from 'src/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute,
    private rentalService:RentalService
  ) {}
  car: Car;
  dataLoaded = false;
  carImages: CarImage[];
  description: string;
  carControl=false
  url: string = 'https://localhost:44307';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsDetailByCarId(params['carId']);
        this.checkCar(params['carId']);
      }
    });
  }
  getCarsDetailByCarId(carId: number) {
    this.cardetailService.getCarsDetailByCarId(carId).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
      // this.carImages = response.data.carImages;
      console.log(response);
    });
  }

  getSliderClassName(index: Number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
  checkCar(carId:number){
    this.rentalService.checkCar(carId).subscribe((response) => {this.carControl=response.success });
  }
}
