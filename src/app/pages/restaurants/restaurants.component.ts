import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantDetailDto } from 'src/app/models/RestaurantDetailDto';
import { RestaurantDto } from 'src/app/models/RestaurantDto';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit  {
  restaurants: Array<RestaurantDto>=[
    {id:1,adresse:"1 rue du lac",nom:"Le coq de la maison blanche",vegetarien:false},
    {id:2,adresse:"3 rue du St Anne",nom:"Wakazi",vegetarien:false},
    {id:3,adresse:"32 allée de Paris",nom:"Le loucher ben",vegetarien:false},
    {id:4,adresse:"11 avenue du tertre",nom:"L''herbe folle",vegetarien:true}
  
  ]
  
  constructor(
    private router: Router) { }
  ngOnInit(): void {

  }

  restaurantDetails(id: number){
    this.router.navigate(['detail-restaurant', id]);
  }

  DonnerNote(id: number){
    this.router.navigate(['nouvel-avis', id]);
  }

}


