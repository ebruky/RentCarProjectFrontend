import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
isLogin:boolean=false
firstname:any
lastname:any
userId:any
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.checkLogin();

  }
checkLogin(){
  if(this.authService.isAuthenticated()){
    this.isLogin=true 
    this.firstname=localStorage.getItem("firstname");
    this.lastname=localStorage.getItem("lastname");
    this.userId=localStorage.getItem("id");
  }
  else{
    this.isLogin=false
  }
}
logout(){
  localStorage.clear();
  this.router.navigate(["login"]);
}
}
