import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessForm } from './success-form';

describe('SuccessForm', () => {
  let component: SuccessForm;
  let fixture: ComponentFixture<SuccessForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
