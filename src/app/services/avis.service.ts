import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { RestaurantDto } from '../models/RestaurantDto';
import { RestaurantDetailDto } from '../models/RestaurantDetailDto';
import { AvisDto } from '../models/AvisDto';
import { AvisCreationDto } from '../models/AvisCreationDto';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private http : HttpClient) {

   }
   public getAvis():Observable<Array<AvisDto>>{
    return this.http.get<Array<AvisDto>>(environment.backendHost+"/avis")
  }
  public saveAvis(AvisDto: AvisCreationDto):Observable<AvisCreationDto>{
    return this.http.post<AvisCreationDto>(environment.backendHost+"/avis",AvisDto);
  }
}
