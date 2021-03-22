import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/models/car';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  url:string="https://localhost:44307";
  empty:boolean=false
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"]);
      }
      if(params["colorId"]){
        this.getCarsByColorId(params["colorId"]);
      }
      else{
        this.getCars();
      }
    })
  }
  getCars(){

    this.carService.getCars().subscribe(response=>{this.cars=response.data
      
      
       });
    
  
    
  }
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{this.cars=response.data
      if( this.cars.length == 0)
      {this.empty = true}
      else{this.empty = false}
      });
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{this.cars=response.data
      if( this.cars.length == 0)
      {this.empty = true}
      else{this.empty = false}
      });
  }
}
