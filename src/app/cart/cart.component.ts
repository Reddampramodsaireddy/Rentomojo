import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WhishlistService } from '../services/whishlist.service';
import { vehicle } from '../services/vehicles';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

total:any; 
cartItems: any;
user:any;
username:any;
address:any;
ordered:any;
constructor(private service: CartService,private orderwhishlist:WhishlistService) {}
ngOnInit() {
    this.user=localStorage.getItem('logged');
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    console.log(this.username)


  this.service.getcartitems().subscribe((res: any) => {
  this.cartItems = res;
 });
  
  this.total=this.service.total();
  console.log(this.total)
}

delete(vid:any){
  this.service.delete(vid)
  this.ngOnInit()
}

temp={
  id:null,
  name:null,
  pricePerDay:null,
  imageUrl:null,
};
addtotemp(vobj:any){
    //this.temp=vobj;
    this.temp.id=vobj.id;
    this.temp.name=vobj.name;
    this.temp.pricePerDay=vobj.pricePerDay;
    this.temp.imageUrl=vobj.imageUrl;
  }

orderedvehicle:any;result:any;
booknow(){
  this.orderedvehicle={
    id:this.temp.id,
    name:this.temp.name,
    pricePerDay:this.temp.pricePerDay,
    imageUrl:this.temp.imageUrl,
    username:this.username,
    address:this.address
  }
this.result=this.orderwhishlist.placeorder(this.orderedvehicle);
alert(this.result)
  console.log(this.orderedvehicle)
  this.cartItems=null;
}



}
  

