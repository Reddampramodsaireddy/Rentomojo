import { Component } from '@angular/core';
import { WhishlistService } from '../services/whishlist.service';

@Component({
  selector: 'app-vieworders',
  standalone: false,
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {
  user:any;username:any;
  orders:any;
  constructor(private order:WhishlistService){}
  
  ngOnInit(){

    this.user=localStorage.getItem('logged');
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    this.order.getOrdersbyUsername(this.username).subscribe((res)=>{
      this.orders=res
      console.log(this.orders);
  })
  }

}
