import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AvisDto } from 'src/app/models/AvisDto';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-list-avis',
  templateUrl: './list-avis.component.html',
  styleUrls: ['./list-avis.component.scss']
})
export class ListAvisComponent implements OnInit{
  avis! : Observable<Array<AvisDto>>;
  constructor(private avisService : AvisService){}
  
  ngOnInit(): void {
    this.getAllAvis();
  }

  getAllAvis(){
    this.avis=this.avisService.getAvis().pipe(
      catchError(err => {
        return throwError(err);
      })
    );

  }

}
