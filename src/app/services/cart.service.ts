import { Injectable } from '@angular/core';
import { vehicle } from './vehicles';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart:vehicle[]=[]
  addtocart(vobj:any){
    this.cart.push(vobj)

  }
  cartlen(){
    return this.cart.length;
  }

  getcartitems(){
    return of(this.cart)
  }

  delete(vid:any){
    let index=this.cart.findIndex((e)=>e.id=vid);
    this.cart.splice(index,1)
  }

  total(){
    return this.cart.reduce((acc,e)=>e.pricePerDay+acc,0)
  }
}
