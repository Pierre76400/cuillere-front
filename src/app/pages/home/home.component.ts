import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  
  images = [
    {src: "../assets/images/pexels-marta-dzedyshko-2067560.jpg"},
    {src: "../assets/images/pexels-chan-walrus-958545.jpg"},
    {src: "../assets/images/pexels-rdne-stock-project-6004758.jpg"},
    {src: "../assets/images/pexels-engin-akyurt-2673353.jpg"},
    {src: "../assets/images/pexels-nesrin-danan-3193818.jpg"},
    {src: "../assets/images/pexels-jer-chung-2059151.jpg"},
    {src: "../assets/images/pexels-valeriya-kobzar-8630151.jpg"},
    {src: "../assets/images/pexels-maarten-van-den-heuvel-2284166.jpg"}
  
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  

}
