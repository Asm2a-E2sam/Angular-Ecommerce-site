import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatonComponent } from './navigaton.component';

describe('NavigatonComponent', () => {
  let component: NavigatonComponent;
  let fixture: ComponentFixture<NavigatonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatonComponent]
    });
    fixture = TestBed.createComponent(NavigatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
