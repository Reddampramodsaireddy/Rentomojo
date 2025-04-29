import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-managevehicles',
  standalone: false,
  templateUrl: './managevehicles.component.html',
  styleUrl: './managevehicles.component.css'
})
export class ManagevehiclesComponent {
  userlist:any;
  temp:any;
  vehicles: any = [];

  constructor(private service:VehiclesService){}
  
  tempdata(data:any){
    this.temp=data
  }


  delete(id:any){
    let res=this.service.deletevehicle(id)
    alert(res)
    
  }

  update(){
    let res=this.service.updatevehicle(this.temp)
    alert(res)
  }


  fetchVehicles() {
    this.service.getAll().subscribe((res) => {
      this.vehicles = res;
    });
  }
  ngOnInit(){
    this.service.getAll().subscribe((res)=>{
      this.vehicles=res
    })
  }

}
