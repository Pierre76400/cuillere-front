import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatDto } from 'src/app/models/PlatDto';
import { RestaurantDetailDto } from 'src/app/models/RestaurantDetailDto';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.scss']
})
export class DetailRestaurantComponent implements OnInit {
  id?: number;


  restaurantDetailDto: Array<RestaurantDetailDto> = [
    {id:1,adresse:"1 rue du lac",nom:"Le coq de la maison blanche",vegetarien:false,plats:[{libelle:"Oeufs mayo",categoriePlat:"ENT",
    libelleCategoriePlat:"Entrée",prix:3.2 }] },
    {id:2,adresse:"3 rue du St Anne",nom:"Wakazi",vegetarien:false,plats:[{libelle:"Boeuf bourguignon",categoriePlat:"PLA",
    libelleCategoriePlat:"Plat",prix:13.2 }]},
    {id:3,adresse:"32 allée de Paris",nom:"Le loucher ben",vegetarien:false,plats:[{libelle:"Ile flottante",categoriePlat:"DES",
    libelleCategoriePlat:"Dessert",prix:5.2}]},
    {id:4,adresse:"11 avenue du tertre",nom:"L''herbe folle",vegetarien:true,plats:[{libelle:"Eclair au chocolat",categoriePlat:"BOI",
    libelleCategoriePlat:"Boisson",prix:4.2 }]}
  ];

   constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
}
