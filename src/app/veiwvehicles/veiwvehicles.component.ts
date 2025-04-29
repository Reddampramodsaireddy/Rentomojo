import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiwvehicles',
  standalone: false,
  templateUrl: './veiwvehicles.component.html',
  styleUrl: './veiwvehicles.component.css'
})
export class VeiwvehiclesComponent {
  constructor(private service:VehiclesService,private router:Router){}
  vehicles:any;
  ngOnInit(){
    this.service.getAll().subscribe((res)=>{
      this.vehicles=res
    })
  }
  detail(vid:any){
    this.router.navigateByUrl("/user/detail/"+vid)
    console.log(vid);
  }

}
