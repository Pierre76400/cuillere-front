import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Page Accueil',
        icon: '',
        url: 'home'
      }
    ]
    
  },
  {
    id: '2',
    titre: 'Restaurants',
    icon: 'fas fa-utensils',
    url: '',
    sousMenu: [
      {
        id: '21',
        titre: 'List des restaurants',
        icon: 'fas fa-utensils',
        url: 'restaurants'
      }
    ]
    
  },
    {
      id: '3',
      titre: 'Avis',
      icon: 'fas fa-star',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'List Avis',
          icon: 'fas fa-star',
          url: 'avis'
        },
        {
          id: '32',
          titre: 'Nouvel Avis',
          icon: 'fas fa-star',
          url: 'nouvel-avis'
        }
      ]
    },
  /*  {
      id: '4',
      titre: 'Plats',
      icon: 'fas fa-utensils',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'List Plats',
          icon: 'fas fa-star',
          url: 'plats'
        }
      ]
      
    },*/
  /*  {
      id: '5',
      titre: 'Plat Catégories',
      icon: 'fas fa-utensils',
      url: 'plat-categories',
      
    },*/
   
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    console.log(this.lastSelectedMenu);
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

  
}
