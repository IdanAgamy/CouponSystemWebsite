import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCouponComponent } from './creat-coupon.component';

describe('CreatCouponComponent', () => {
  let component: CreatCouponComponent;
  let fixture: ComponentFixture<CreatCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
