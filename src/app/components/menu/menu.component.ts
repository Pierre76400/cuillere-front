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
    titre: 'Page Accueil',
    icon: 'fas fa-home',
    url: 'home'/*,
    sousMenu: [
      {
        id: '11',
        titre: 'Page Accueil',
        icon: 'fas fa-home',
        url: 'home'
      }
    ]*/
    
  },
  {
    id: '2',
    titre: 'Restaurants',
    icon: 'fas fa-utensils',
    url: 'restaurants'/*,
    sousMenu: [
      {
        id: '21',
        titre: 'Liste des restaurants',
        icon: 'fas fa-utensils',
        url: 'restaurants'
      }
    ]
    */
  },
    {
      id: '3',
      titre: 'Avis',
      icon: 'fas fa-star',
      url: 'avis'/*,
      sousMenu: [
        {
          id: '31',
          titre: 'Liste Avis',
          icon: 'fas fa-star',
          url: 'avis'
        },
     /*   {
          id: '32',
          titre: 'Nouvel Avis',
          icon: 'fas fa-star',
          url: 'nouvel-avis'
        }*/
      //]
    },
  
    {
      id: '4',
      titre: 'FAQ',
      icon: 'fas fa-question-circle ',
      url: 'faq',
      
    }
   
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

  
}
