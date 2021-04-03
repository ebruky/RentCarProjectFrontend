import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Car } from 'src/models/car';
import { DatePipe } from '@angular/common';
import { RentalService } from 'src/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/models/rental';
import { CustomerService } from 'src/services/customer.service';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {
  @Input() car: Car;
  rentalAddForm: FormGroup;
  currentDate: Date = new Date()
  datePipe:DatePipe;
  rentDate:string | null;
  returnDate:string | null;
  customers:Customer[];
  constructor(private formBuilder: FormBuilder,private rentalService:RentalService,private toastrService:ToastrService,private customerService:CustomerService) { }

  ngOnInit(): void {
    
    this.createRentalAddForm();
    this.getCustomers();
  }
 
  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      carId: [this.car.id, Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: [null],
    });}
getCustomers(){
  this.customerService.getCustomers().subscribe(response=>{this.customers=response.data
  });

}
    add() {
      if(this.rentalAddForm.valid){
  
        let rentalModel = Object.assign({}, this.rentalAddForm.value);
        this.checkDate(rentalModel)
        this.rentalService.add(rentalModel).subscribe(response=>{
        this.toastrService.success("Başarılı","Kiralama İşlemi Tamamlandı")}
      )
        
      
      }
      else{
      this.toastrService.error("Dikkat","Kiralanamadı, Formunuz Eksik")
      }
      
    }

    checkDate(rentalModel:Rental){
      let rentDate = new Date(rentalModel.rentDate);
        let returnDate = new Date(rentalModel.returnDate);
        if (rentDate < this.currentDate) {
          this.toastrService.warning(
             'Kiralama Tarihi, bu günden sonraki günler olmalıdır', 'Dikkat'
          );
          
       }
       if (returnDate < rentDate || returnDate.getDate() == rentDate.getDate()) {
          this.toastrService.warning(
             'Dönüş Tarihi, kiralama tarihinden sonraki günler olmalıdır', 'Dikkat'
          );
          
       }
    }
   
}
