import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsItmesComponent } from './sections-itmes.component';

describe('SectionsItmesComponent', () => {
  let component: SectionsItmesComponent;
  let fixture: ComponentFixture<SectionsItmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsItmesComponent]
    });
    fixture = TestBed.createComponent(SectionsItmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
