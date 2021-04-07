import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/models/car';
import { CarImage } from 'src/models/carImage';
import { CarModel } from 'src/models/carModel';
import { CarService } from 'src/services/car.service';
import { CardetailService } from 'src/services/cardetail.service';
import { ImageService } from 'src/services/image.service';
import { RentalService } from 'src/services/rental.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute,private imageService:ImageService,private formBuilder: FormBuilder,
    private rentalService:RentalService
  ) {}
  car: Car;
  //carImageAddForm: FormGroup;
  dataLoaded = false;
  carImage:CarImage
  carid:number
  carModel:CarModel
  carImages: CarImage[];
  selectedFile: ImageSnippet;
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
    //this.createCarImageAddForm();
  }
    // createCarImageAddForm() {
    // this.carImageAddForm = this.formBuilder.group({
    //   carId: [this.carid, Validators.required]
    // });}
  getCarsDetailByCarId(carId: number) {
    this.cardetailService.getCarsDetailByCarId(carId).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
      this.carid=carId
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

  processFile(imageInput: any) {
        //let carImageModel = Object.assign({}, this.carImageAddForm.value);
        this.carImage={carId:this.carid}
        const file: File = imageInput.files[0];
        const reader = new FileReader();
    
        reader.addEventListener('load', (event: any) => {
    
          this.selectedFile = new ImageSnippet(event.target.result, file);
    
          this.imageService.add(this.selectedFile.file,this.carImage).subscribe(
            (res) => {
            
            },
            (err) => {
            
            })
        });
    
        reader.readAsDataURL(file);
      }
}
