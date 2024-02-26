import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsPaginesComponent } from './restaurantsPagines.component';

describe('RestaurantsPaginesComponent', () => {
  let component: RestaurantsPaginesComponent;
  let fixture: ComponentFixture<RestaurantsPaginesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsPaginesComponent]
    });
    fixture = TestBed.createComponent(RestaurantsPaginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
