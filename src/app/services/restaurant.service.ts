import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { RestaurantDto } from '../models/RestaurantDto';
import { RestaurantDetailDto } from '../models/RestaurantDetailDto';
import { PlatDto } from '../models/PlatDto';
import { RechercheRestaurantDto } from '../models/RechercheRestaurantDto';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {

  }

  public getRestaurants(): Observable<Array<RestaurantDto>> {
    return this.http.get<Array<RestaurantDto>>(environment.backendHost + "/restaurants")
  }
  public searchRestaurants(nomRestaurant: string): Observable<RechercheRestaurantDto> {
    return this.http.get<RechercheRestaurantDto>(environment.backendHost + "/restaurants/_search?nomRestaurant=" + nomRestaurant)
  }
  public getRestaurantsById(idRestaurant: any): Observable<RestaurantDetailDto> {
    return this.http.get<RestaurantDetailDto>(environment.backendHost + "/restaurants/" + idRestaurant)
  }
  public getPlats(idRestaurant: any): Observable<Array<PlatDto>> {
    return this.http.get<Array<PlatDto>>(environment.backendHost + "/restaurants/" + idRestaurant + "/plats")
  }
  public searchRestaurantsWithPagination(nomRestaurant: string, numPage: number, taillePage: number): Observable<RechercheRestaurantDto> {
    return this.http.get<RechercheRestaurantDto>(environment.backendHost + "/restaurants/_searchPagine?nomRestaurant=" + nomRestaurant + "&numPage=" + numPage + "&taillePage=" + taillePage)
  }

}
