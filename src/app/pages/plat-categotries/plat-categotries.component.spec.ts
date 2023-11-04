import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatCategotriesComponent } from './plat-categotries.component';

describe('PlatCategotriesComponent', () => {
  let component: PlatCategotriesComponent;
  let fixture: ComponentFixture<PlatCategotriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatCategotriesComponent]
    });
    fixture = TestBed.createComponent(PlatCategotriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
