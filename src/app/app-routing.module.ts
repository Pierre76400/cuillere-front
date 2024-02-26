import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ListAvisComponent } from './pages/Avis/list-avis/list-avis.component';
import { NouvelAvisComponent } from './pages/Avis/nouvel-avis/nouvel-avis.component';
import { DetailRestaurantComponent } from './components/detail-restaurant/detail-restaurant.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  {
   path:'',
   component:PageDashboardComponent,
   children:[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'restaurants',
      component:RestaurantsComponent
    },
    {path: 'detail-restaurant/:id', component: DetailRestaurantComponent},
    {
      path:'avis',
      component:ListAvisComponent
    },
    {
      path:'nouvel-avis',
      component:NouvelAvisComponent
    },
    {
      path:'nouvel-avis/:id',
      component:NouvelAvisComponent
    },
    {
      path:'faq',
      component:FaqComponent
    },
   ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
