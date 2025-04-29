import { Component } from '@angular/core';
import { WhishlistService } from '../services/whishlist.service';


@Component({
  selector: 'app-whishlist',
  standalone: false,
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css'
})
export class WhishlistComponent {
  whishlistItems: any;
  constructor(private service: WhishlistService) {}
  ngOnInit() {
    this.service.getwhishlistitems().subscribe((res: any) => {
      this.whishlistItems = res;
      console.log(this.whishlistItems)
   });
 

}
}
