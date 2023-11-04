import { Component } from '@angular/core';
import { AvisDto } from 'src/app/models/AvisDto';

@Component({
  selector: 'app-list-avis',
  templateUrl: './list-avis.component.html',
  styleUrls: ['./list-avis.component.scss']
})
export class ListAvisComponent {
  avis: Array<AvisDto>=[
    {commentaire:'Génial',auteur:"Pierre",note:5.1,dateCreation:'2020-03-05'},
    {commentaire:'Bof',auteur:"Alfred",note:2.1,dateCreation:'2020-08-05'},
    {commentaire:'Bien',auteur:"Nicolas",note:4.1,dateCreation:'2004-03-05'},
    {commentaire:'Assez bien',auteur:"Anne",note:4.1,dateCreation:'2001-03-05'},
  ]


}
