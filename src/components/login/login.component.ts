import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenModel } from 'src/models/tokenModel';
import { AuthService } from 'src/services/auth.service';
import { LocalStorageeService } from 'src/services/local-storagee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,private localStoragee:LocalStorageeService,
    private toastrService: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe((response) => {
        console.log(response)
        this.toastrService.info(response.message);
        this.localStoragee.AddLocalStorage(response.data)
        
        this.router.navigate(["cars"]);

      },responseError=>{
       // console.log(responseError)
       this.toastrService.error(responseError.error);
      });
    }
  }
  

}
