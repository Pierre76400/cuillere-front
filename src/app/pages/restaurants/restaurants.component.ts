import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from "rxjs";
import { RechercheRestaurantDto } from 'src/app/models/RechercheRestaurantDto';
import { RestaurantDto } from 'src/app/models/RestaurantDto';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  nomRestaurant: String = "";
  searchFormGroup: FormGroup | undefined;
  restaurants: RestaurantDto[] | undefined;

  constructor(private restaurantService: RestaurantService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      nomRestaurant: this.fb.control("")
    });
    this.handleSearchRestaurants();
  }

  handleSearchRestaurants() {
    let nomRestaurant = this.searchFormGroup?.value.nomRestaurant;
    this.restaurantService.searchRestaurants(nomRestaurant).subscribe(data => {
      this.restaurants = data.restaurants;
    }, err => {
      return throwError(err);
    });

  }

  onKeyUpEvent(event: any) {
    this.handleSearchRestaurants();
  }

}


