import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/models/brand';
import { Color } from 'src/models/color';
import { BrandService } from 'src/services/brand.service';
import { CarService } from 'src/services/car.service';
import { ColorService } from 'src/services/color.service';
import { ImageService } from 'src/services/image.service';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  colors:Color[]
  
  brands:Brand[]
  constructor(private formBuilder: FormBuilder,
    private carService:CarService,private toastrService:ToastrService,private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
this.getBrands();
this.getColors();
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      colorId: ['', Validators.required],
      brandId: ['', Validators.required],
      description: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],

    });}
    
  
  getBrands(){

    this.brandService.getBrands().subscribe(response=>{this.brands=response.data
       });
      }
      getColors() {
        this.colorService.getColors().subscribe((response) => {
          this.colors = response.data;
        });
      }
      
      
  add() {
    if(this.carAddForm.valid){

      let carModel = Object.assign({}, this.carAddForm.value);

    this.carService.add(carModel).subscribe(response=>{
      
      this.toastrService.success("Başarılı",response.message)},responseError=>{
        console.log(responseError)
      if(responseError.error.Errors.length>0){
       
       for (let i = 0; i < responseError.error.Errors.length; i++) {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage)}
         
       }
       
      }
    )
    }
    else{
this.toastrService.error("Dikkat","Araç Eklenemedi, Formunuz Eksik")
    }
    
  }
}
