import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvel-avis',
  templateUrl: './nouvel-avis.component.html',
  styleUrls: ['./nouvel-avis.component.scss']
})
export class NouvelAvisComponent implements OnInit{
  id?: number;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  operationFromGroup! : FormGroup;




}
