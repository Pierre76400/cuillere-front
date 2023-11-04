import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelAvisComponent } from './nouvel-avis.component';

describe('NouvelAvisComponent', () => {
  let component: NouvelAvisComponent;
  let fixture: ComponentFixture<NouvelAvisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelAvisComponent]
    });
    fixture = TestBed.createComponent(NouvelAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
