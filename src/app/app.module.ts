import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ListAvisComponent } from './pages/Avis/list-avis/list-avis.component';
import { NouvelAvisComponent } from './pages/Avis/nouvel-avis/nouvel-avis.component';
import { MenuComponent } from './components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DetailRestaurantComponent } from './components/detail-restaurant/detail-restaurant.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarsModule } from 'ngx-stars';
import { LoaderComponent } from './components/loader/loader.component';
import { NgOptimizedImage } from '@angular/common';
import { FaqComponent } from './pages/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    RestaurantsComponent,
    ListAvisComponent,
    NouvelAvisComponent,
    MenuComponent,
    HeaderComponent,
    DetailRestaurantComponent,
    HomeComponent,
    LoaderComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
