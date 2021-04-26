import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';
import { LocalStorageeService } from 'src/services/local-storagee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userUpdateForm: FormGroup;
  userId:number
  firstname:any
  lastname:any
  email:any
  constructor(private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,
    private authService: AuthService,private localStoragee:LocalStorageeService,
    private toastrService: ToastrService,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      
      if(params['userId']){
        this.userId=Number(params['userId']);
        this.createUserUpdateForm();
        this.firstname=localStorage.getItem("firstname");
        this.lastname=localStorage.getItem("lastname");
        this.email=localStorage.getItem("email");
        
    }
    });

    
  }
  createUserUpdateForm(){
    this.userUpdateForm = this.formBuilder.group({
      
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName:["", Validators.required],
      lastName:["", Validators.required]
    });
  }
  update() {
    if (this.userUpdateForm.valid) {
      let userUpdateFormModel = Object.assign({}, this.userUpdateForm.value);
      userUpdateFormModel.id=this.userId;
      
      this.authService.update(userUpdateFormModel).subscribe((response) => {
        this.toastrService.info(response.message);
        
        this.localStoragee.AddLocalStorage(response.data)
        // localStorage.clear();
        // localStorage.setItem('token', response.data.token);
        // localStorage.setItem('firstname', response.data.user.firstName);
        // localStorage.setItem('lastname', response.data.user.lastName);
        // localStorage.setItem('id', response.data.user.id.toString());
      },responseError=>{
       this.toastrService.error(responseError.error);
      });
    }
    else{
      this.toastrService.error("Dikkat","Lütfen Tüm Alanları Doldurun, Formunuz Eksik")
          }
  }
}
