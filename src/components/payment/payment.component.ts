import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/models/car';

import { Rental } from 'src/models/rental';
import { CardetailService } from 'src/services/cardetail.service';
import { PaymentService } from 'src/services/payment.service';
import { RentalService } from 'src/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
rental:Rental
nameOnTheCard:string;
cardNumber:string;
expirationDate:string;
cardCvv:string;
moneyInTheCard:number;

totalPrice:number;
carId:number;

  constructor(private paymentService:PaymentService,private activatedRoute:ActivatedRoute, private router :Router,
    private toastrService:ToastrService,
    private rentalService:RentalService,
    private cardetailService:CardetailService ) { 
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['rental']){
        this.rental = JSON.parse(params['rental']);
        this.carId=Number(this.rental.carId);
        this.totalPrice=Number(this.rental.totalPrice);
        
        
        
      }
    });
  }


//   calculatePayment(){
    
//     if(this.rental.returnDate != null){
//       var returnDate = new Date(this.rental.returnDate.toString());
//       var rentDate = new Date(this.rental.rentDate.toString());
//       var difference = returnDate.getTime() - rentDate.getTime();

//       var rentDays = Math.ceil(difference / (1000 * 3600 * 24));
//       console.log(rentDays)
// console.log(this.dailyPrice)
//       this.totalPrice = rentDays * this.dailyPrice;

//       console.log(this.totalPrice)
      
//       if(this.totalPrice <= 0){
//         this.router.navigate(['/cars']);
//         this.toastrService.error('Ana sayfaya yönlendiriliyorsunuz','Hatalı işlem');
//       }
//     }
//   }
  rentACar(){
        this.rentalService.add(this.rental).subscribe(response=>{
       this.toastrService.success("Başarılı","Kiralama İşlemi Tamamlandı")})
       this.router.navigate(['/cars/detail/'+this.carId]);
  }
  

}
