import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoginComponent } from './all-login.component';

describe('AllLoginComponent', () => {
  let component: AllLoginComponent;
  let fixture: ComponentFixture<AllLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
