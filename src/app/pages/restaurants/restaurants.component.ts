import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {catchError, map, Observable, throwError} from "rxjs";
import { RestaurantDetailDto } from 'src/app/models/RestaurantDetailDto';
import { RestaurantDto } from 'src/app/models/RestaurantDto';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit  {
  restaurants! : Observable<Array<RestaurantDto>>;
  restaurantDetails! : Observable<Array<RestaurantDetailDto>>;
  numPage! : number;
  taillePage!: number;
  nomRestaurant:String =""

  searchFormGroup : FormGroup | undefined;
  
  constructor(private restaurantService : RestaurantService, private fb : FormBuilder,
    private router: Router) { }
  ngOnInit(): void {

    this.searchFormGroup=this.fb.group({
      nomRestaurant : this.fb.control("")
    });
  
    this.handleSearchRestaurants();
  }
  handleSearchRestaurants() {
    let nomRestaurant=this.searchFormGroup?.value
    .nomRestaurant;
    this.restaurantDetails=this.restaurantService.searchRestaurants(nomRestaurant).pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }

  onKeyUpEvent(event: any){
    this.handleSearchRestaurants();
 }
}


