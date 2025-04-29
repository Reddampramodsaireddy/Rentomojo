import { Injectable } from '@angular/core';
import { vehicle } from './vehicles';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  vehicles:vehicle[]=[
    {
      id: 'B001',
      name: 'Royal Enfield Classic 350',
      type: 'Bike',
      brand: 'Royal Enfield',
      model: 'Classic 350',
      pricePerDay: 599,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/183389/classic-350-right-side-view-62.jpeg?isig=0',
      available: true,
      description: 'A powerful and stylish bike for city and long rides.'
    },
    {
      id: 'B002',
      name: 'Honda Activa 6G',
      type: 'Bike',
      brand: 'Honda',
      model: 'Activa 6G',
      pricePerDay: 299,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/310x174/n/bw/models/colors/honda-select-model-black-1674535477895.png?q=80',
      available: true,
      description: 'A convenient scooter perfect for daily commute.'
    },
    {
      id: 'B003',
      name: 'KTM Duke 200',
      type: 'Bike',
      brand: 'KTM',
      model: 'Duke 200',
      pricePerDay: 699,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/129743/duke-200-right-side-view-4.jpeg?isig=0',
      available: true,
      description: 'Sporty bike perfect for thrill seekers.'
    },
    {
      id: 'B004',
      name: 'TVS Apache RTR 160',
      type: 'Bike',
      brand: 'TVS',
      model: 'Apache RTR 160',
      pricePerDay: 449,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/130211/apache-160-right-side-view-2.jpeg?isig=0',
      available: true,
      description: 'Street performance bike ideal for young riders.'
    },
    {
      id: 'B005',
      name: 'Yamaha FZ-S',
      type: 'Bike',
      brand: 'Yamaha',
      model: 'FZ-S',
      pricePerDay: 499,
      fuelType: 'Petrol',
      imageUrl: 'https://shop.yamaha-motor-india.com/cdn/shop/files/Vermillion.webp?v=1715159714',
      available: false,
      description: 'Stylish and comfortable for city rides.'
    },
    {
      id: 'B006',
      name: 'Bajaj Pulsar 150',
      type: 'Bike',
      brand: 'Bajaj',
      model: 'Pulsar 150',
      pricePerDay: 429,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/bajaj-pulsar-150-single-disc1724747126664.jpg?q=80',
      available: true,
      description: 'Most loved commuter bike in India.'
    },
  
    // ---------------- CARS ----------------
    {
      id: 'C001',
      name: 'Hyundai i20',
      type: 'Car',
      brand: 'Hyundai',
      model: 'i20',
      pricePerDay: 1299,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80&q=80',
      available: true,
      description: 'Comfortable hatchback ideal for city drives.'
    },
    {
      id: 'C002',
      name: 'Maruti Swift',
      type: 'Car',
      brand: 'Maruti',
      model: 'Swift',
      pricePerDay: 1099,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80&q=80',
      available: true,
      description: 'Efficient and economical for daily travel.'
    },
    {
      id: 'C003',
      name: 'Honda City',
      type: 'Car',
      brand: 'Honda',
      model: 'City',
      pricePerDay: 1599,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80&q=80',
      available: false,
      description: 'Premium sedan for business and family use.'
    },
    {
      id: 'C004',
      name: 'Tata Tiago',
      type: 'Car',
      brand: 'Tata',
      model: 'Tiago',
      pricePerDay: 999,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-32.jpeg?isig=0&q=80',
      available: true,
      description: 'Compact and budget-friendly car.'
    },
    {
      id: 'C005',
      name: 'Hyundai Verna',
      type: 'Car',
      brand: 'Hyundai',
      model: 'Verna',
      pricePerDay: 1499,
      fuelType: 'Diesel',
      imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-32.jpeg?isig=0&q=80',
      available: true,
      description: 'Executive class car with luxury features.'
    },
    {
      id: 'C006',
      name: 'Volkswagen Polo',
      type: 'Car',
      brand: 'Volkswagen',
      model: 'Polo',
      pricePerDay: 1199,
      fuelType: 'Petrol',
      imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80',
      available: true,
      description: 'Sturdy and stylish premium hatchback.'
    },
  
  ];

  //for the users
  getAll(){
    return of (this.vehicles)
  }

  getVehicleCount(){
    return this.vehicles.length
  }

  getCars(){
    return of (this.vehicles.filter((e)=>e.type=="Car"))
  }

  getBikes(){
    return of (this.vehicles.filter((e)=>e.type=="Bike"))
  }

  getVehiclesById(vid:any){
    return this.vehicles.find((e)=>e.id==vid)
  }
  constructor() { }




  //for admin
  add(obj:any){
    this.vehicles.push(obj);
    return "vehicle added succesfully"
  }


  updatevehicle(update:any){
    let index=this.vehicles.findIndex((e)=>e.id=update);
    this.vehicles.splice(index,1,update)
    return "updated succesfully"

  }


  deletevehicle(vid:any){
    let index=this.vehicles.findIndex((e)=>e.id==vid);
    this.vehicles.splice(index,1)
    return "user delete succesfully"
  }
}
