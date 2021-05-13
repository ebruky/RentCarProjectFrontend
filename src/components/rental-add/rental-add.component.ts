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
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder,private router:Router,
    private rentalService:RentalService,private toastrService:ToastrService,private customerService:CustomerService) { }

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
        this.calculatePayment(rentalModel)
        this.router.navigate(['/payment',JSON.stringify(rentalModel)]);
        this.toastrService.info('Ödeme sayfasına yönlendiriliyorsunuz.','Ödeme İşlemleri')
        
        
      
      }
      else{
      this.toastrService.error("Dikkat","Kiralanamadı, Formunuz Eksik")
      }
      
    }
    calculatePayment(rental:Rental){
    
      if(rental.returnDate != null){
        var returnDate = new Date(rental.returnDate.toString());
        var rentDate = new Date(rental.rentDate.toString());
        var difference = returnDate.getTime() - rentDate.getTime();
  
        var rentDays = Math.ceil(difference / (1000 * 3600 * 24));
        
        rental.totalPrice = rentDays * this.car.dailyPrice;
  
        
        if(rental.totalPrice <= 0){
          this.router.navigate(['/cars']);
          this.toastrService.error('Ana sayfaya yönlendiriliyorsunuz','Hatalı işlem');
        }
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
