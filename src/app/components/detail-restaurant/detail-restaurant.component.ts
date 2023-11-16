import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { PlatDto } from 'src/app/models/PlatDto';
import { RestaurantDetailDto } from 'src/app/models/RestaurantDetailDto';
import { RestaurantDto } from 'src/app/models/RestaurantDto';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.scss']
})
export class DetailRestaurantComponent implements OnInit {
  restaurantDetailDto!: RestaurantDetailDto;
  plats!: Array<PlatDto>;
  id?: number | undefined;

   constructor(private route: ActivatedRoute, private restaurantService : RestaurantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.restaurantService.getRestaurantsById(this.id)
        .subscribe({
          next: (data) => {
            this.restaurantDetailDto=data

          }
        });
       
    }

    this.restaurantService.getPlats(this.id) .subscribe({
      next: (data) => {
        this.plats=data

      }
    });
    
}
}
