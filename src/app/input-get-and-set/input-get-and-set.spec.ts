import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGetAndSet } from './input-get-and-set';

describe('InputGetAndSet', () => {
  let component: InputGetAndSet;
  let fixture: ComponentFixture<InputGetAndSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGetAndSet],
    }).compileComponents();

    fixture = TestBed.createComponent(InputGetAndSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
