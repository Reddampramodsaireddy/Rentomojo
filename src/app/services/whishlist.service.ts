import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { vehicle } from './vehicles';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
  whishist:vehicle[]=[]
    addtowhishlist(vobj:any){
      console.log(vobj)
      this.whishist.push(vobj)

  
    }

    getwhishlistitems(){
      return of(this.whishist)
    }  






    orders:any=[]

    placeorder(obj:any){
      this.orders.push(obj);
      return "order placed";
    }
  
    //for admin and remaing all for the users only
    getallorders(){
      return of (this.orders)
    }
  
    getOrdersbyUsername(uname:any){
      return of(this.orders.filter((e:any)=>e.username==uname));
    }


    getOrderCount(){
      return this.orders.length
    }
}
