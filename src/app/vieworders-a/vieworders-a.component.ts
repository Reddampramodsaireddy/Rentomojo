import { Component } from '@angular/core';
import { WhishlistService } from '../services/whishlist.service';

@Component({
  selector: 'app-vieworders-a',
  standalone: false,
  templateUrl: './vieworders-a.component.html',
  styleUrl: './vieworders-a.component.css'
})
export class ViewordersAComponent {
    user:any;username:any;
    orders:any;
    constructor(private service:WhishlistService){}
    
    ngOnInit(){
  
      this.user=localStorage.getItem('logged');
      this.user=JSON.parse(this.user);
      this.username=this.user.username;
      this.service.getallorders().subscribe((res)=>{
        this.orders=res
        console.log(this.orders);
    })
    }
  

}
