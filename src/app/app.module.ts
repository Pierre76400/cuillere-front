import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ListAvisComponent } from './pages/Avis/list-avis/list-avis.component';
import { NouvelAvisComponent } from './pages/Avis/nouvel-avis/nouvel-avis.component';
import { PlatCategotriesComponent } from './pages/plat-categotries/plat-categotries.component';
import { PlatsComponent } from './pages/plats/plats.component';
import { MenuComponent } from './components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DetailRestaurantComponent } from './components/detail-restaurant/detail-restaurant.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FlickrService } from './flickr.service';


@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    RestaurantsComponent,
    ListAvisComponent,
    NouvelAvisComponent,
    PlatCategotriesComponent,
    PlatsComponent,
    MenuComponent,
    HeaderComponent,
    DetailRestaurantComponent,
    PaginationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
