import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { VeiwvehiclesComponent } from './veiwvehicles/veiwvehicles.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { CartComponent } from './cart/cart.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { ManagevehiclesComponent } from './managevehicles/managevehicles.component';
import { ViewordersAComponent } from './vieworders-a/vieworders-a.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'veiw',component:VeiwvehiclesComponent},
      {path:'orders',component:ViewordersComponent},
      {path:'cart',component:CartComponent},
      {path:'whishlist',component:WhishlistComponent},
      {path:'detail/:vid',component:VehicledetailsComponent}
    ]
  },
  
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:AdminhomeComponent},
      {path:'add',component:AddvehiclesComponent},
      {path:'manage',component:ManagevehiclesComponent},
      {path:'view',component:VeiwvehiclesComponent},
      {path:'orders',component:ViewordersAComponent},
      
    ]

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
