import { Component, OnInit } from '@angular/core';
import { FlickrService } from 'src/app/flickr.service';
import { FlickerResponse } from 'src/app/models/flickerresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flickerResponse?: FlickerResponse;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.flickrService.getPhotos().subscribe( response => {
      this.flickerResponse = response;
    }, error => {
      console.log(error);
    });
  }

}
