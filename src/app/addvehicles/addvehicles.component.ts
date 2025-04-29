import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehiclesService } from '../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvehicles',
  standalone: false,
  templateUrl: './addvehicles.component.html',
  styleUrl: './addvehicles.component.css'
})
export class AddvehiclesComponent {
  addVehicleForm:FormGroup=new FormGroup({})
 
 
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar,private service:VehiclesService,private router:Router){
      this.addVehicleForm=fb.group({
        id:['',Validators.required],
        name: ['',Validators.required],
        type: ['',Validators.required],
        brand: ['',Validators.required],
        model: ['',Validators.required],
        pricePerDay: ['',Validators.required],
        fuelType: ['',Validators.required],
        imageUrl: ['',Validators.required],
        available: ['',Validators.required],
        description: ['',Validators.required]
      })
  }
  result:any;
  addnow(){
    this._snackBar.open("vehicle Added successfully","close",{ duration: 3000});
    console.log(this.addVehicleForm.value)
    this.result=this.service.add(this.addVehicleForm.value)
    this.router.navigateByUrl("/admin/view")
  }

}
