import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/models/car';
import { CarImage } from 'src/models/carImage';
import { CardetailService } from 'src/services/cardetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute
  ) {}
  car: Car;
  dataLoaded = false;
  carImages: CarImage[];
  description: string;
  url: string = 'https://localhost:44307';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsDetailByCarId(params['carId']);
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
}