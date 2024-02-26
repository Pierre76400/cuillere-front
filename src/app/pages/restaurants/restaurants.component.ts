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

  pageSize: number = 10;
  nomRestaurant: String = "";
  nbResultat!: any;
  currentPage!: number;
  pages: number[] = [];
  paginationRange: number = 5;


  searchFormGroup: FormGroup | undefined;
  restaurants: RestaurantDto[] | undefined;
  rechercheRestaurant: RechercheRestaurantDto | undefined;

  constructor(private restaurantService: RestaurantService, private fb: FormBuilder,
    private router: Router) { }
  ngOnInit(): void {
    this.currentPage = 0;
    this.searchFormGroup = this.fb.group({
      nomRestaurant: this.fb.control("")
    });
    this.getRestaurants();
    this.handleSearchRestaurants();
  }
  handleSearchRestaurants() {
    let nomRestaurant = this.searchFormGroup?.value
      .nomRestaurant;
    if (this.isPaginatedSearch()) {
      // Recherche paginée
      this.restaurantService.searchRestaurantsWithPagination(nomRestaurant, this.currentPage, this.pageSize).subscribe(data => {
        this.restaurants = data.restaurants;
        this.nbResultat = data.nbResultat;
        this.completerNbAvis();
      }, err => {
        return throwError(err);
      });
    } else {
      // Recherche non paginée
      this.restaurantService.searchRestaurants(nomRestaurant).subscribe(data => {
        this.restaurants = data.restaurants;
      }, err => {
        return throwError(err);
      });
    }
  }

  completerNbAvis(){
    if(this.restaurants!=undefined){
      for(let i=0;i<this.restaurants.length;i++){
        let r=this.restaurants[i];
        this.restaurantService.getAvis(r.id).subscribe(
          data=> {
            r.nbAvis=data.length;
          }
        );
      }
    }
  }

  gotoPage(page: number) {
    if (page >= 0 && page < this.getTotalPages()) {
      this.currentPage = page;
      this.handleSearchRestaurants();
    }
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;

    })
    catchError(err => {
      return throwError(err);
    })
  }

  onKeyUpEvent(event: any) {
    this.handleSearchRestaurants();
  }

  // Méthode pour calculer le nombre total de pages
  getTotalPages(): number {
    if (this.nbResultat && this.pageSize) {
      return Math.ceil(this.nbResultat / this.pageSize);
    } else {
      return 0;
    }
  }

  isPaginatedSearch(): boolean {
    // Vérifie si la pagination est activée (dans cet exemple, si pageSize est défini)
    return !!this.pageSize;
  }
  getPaginationStartIndex(): number {
    let start = this.currentPage - Math.floor(this.paginationRange / 2);
    return Math.max(start, 0);
  }

  // Méthode pour obtenir l'indice de fin de la plage de pagination
  getPaginationEndIndex(): number {
    let end = this.currentPage + Math.ceil(this.paginationRange / 2);
    return Math.min(end, this.getTotalPages() - 1);
  }

  // Méthode pour obtenir la liste des pages à afficher
  getDisplayedPages(): number[] {
    const startIndex = this.getPaginationStartIndex();
    const endIndex = this.getPaginationEndIndex();
    return Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
  }

}


