import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CartComponent } from './cart/cart.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { VeiwvehiclesComponent } from './veiwvehicles/veiwvehicles.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { ManagevehiclesComponent } from './managevehicles/managevehicles.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ViewordersAComponent } from './vieworders-a/vieworders-a.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HomeComponent,
    VehicledetailsComponent,
    WhishlistComponent,
    CartComponent,
    AdminhomeComponent,
    VeiwvehiclesComponent,
    ViewordersComponent,
    AddvehiclesComponent,
    ManagevehiclesComponent,
    ViewordersAComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
