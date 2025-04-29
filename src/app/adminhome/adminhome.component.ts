import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { WhishlistService } from '../services/whishlist.service';

@Component({
  selector: 'app-adminhome',
  standalone: false,
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
  vehicleCount: number = 0;
  orderCount: number = 0;

  constructor(private vehicleService:VehiclesService, private orderService: WhishlistService) {}

  ngOnInit(): void {
    this.vehicleCount = this.vehicleService.getVehicleCount();
    this.orderCount = this.orderService.getOrderCount();

}
}