import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisCreationDto } from 'src/app/models/AvisCreationDto';
import { RestaurantDetailDto } from 'src/app/models/RestaurantDetailDto';
import { RestaurantDto } from 'src/app/models/RestaurantDto';
import { AvisService } from 'src/app/services/avis.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-nouvel-avis',
  templateUrl: './nouvel-avis.component.html',
  styleUrls: ['./nouvel-avis.component.scss']
})
export class NouvelAvisComponent implements OnInit{
  id?: number | undefined;
  newAvisFormGroup! : FormGroup;
  restaurant!: RestaurantDetailDto;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private avisService: AvisService, private router: Router,
    private restaurantService: RestaurantService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newAvisFormGroup=this.fb.group({
      commentaire : this.fb.control(""),
      auteur : this.fb.control(""),
      note : this.fb.control(null),
      restaurant_id : this.fb.control(null)
    });
    if (this.id) {
      this.restaurantService.getRestaurantsById(this.id)
        .subscribe({
          next: (data) => {
            this.restaurant=data

          }
        });
    }
  }


  handleSaveCustomer() {
    let avis:AvisCreationDto=this.newAvisFormGroup.value;
    avis.idRestaurant = this.restaurant.id
    this.avisService.saveAvis(avis).subscribe({
      next : data=>{
        alert("Customer has been successfully saved!");
        this.router.navigateByUrl("/avis");
      },
      error : err => {
        console.log(err);
      }
    });
  }

  onRatingSet(rating: number): void {
    let avis:AvisCreationDto=this.newAvisFormGroup.value;
    avis.note = rating;
  }


}
