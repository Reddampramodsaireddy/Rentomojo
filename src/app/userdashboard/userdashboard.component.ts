import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  standalone: false,
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  len:any;
  constructor(private cartService:CartService,private router:Router){}
  ngDoCheck(){
    this.len=  this.cartService.cartlen();
  }

  
  logOut(){
    localStorage.removeItem("logged");
    this.router.navigateByUrl("/")


  }


}