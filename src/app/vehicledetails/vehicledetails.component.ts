import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';
import { CartService } from '../services/cart.service';
import { WhishlistService } from '../services/whishlist.service';

@Component({
  selector: 'app-vehicledetails',
  standalone: false,
  templateUrl: './vehicledetails.component.html',
  styleUrl: './vehicledetails.component.css'
})
export class VehicledetailsComponent {
  constructor(private act:ActivatedRoute,private service:VehiclesService,private cartService:CartService,private whishlistservice:WhishlistService,private router:Router){}
  vehicle:any;
  vehicleid:any;
  ngOnInit(){
    this.vehicleid=this.act.snapshot.paramMap.get('vid')
    console.log(this.vehicleid)

    this.vehicle=this.service.getVehiclesById(this.vehicleid)
    console.log(this.vehicle)

  }

  addtocart(vobj:any){
    this.cartService.addtocart(vobj)
    this.router.navigateByUrl("/user/cart")
  }

  addtoWhishlist(vobj:any){
    console.log("hello")
    this.whishlistservice.addtowhishlist(vobj)
  }







  

  

}
