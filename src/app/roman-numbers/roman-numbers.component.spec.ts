import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumbersComponent } from './roman-numbers.component';

describe('RomanNumbersComponent', () => {
  let component: RomanNumbersComponent;
  let fixture: ComponentFixture<RomanNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
