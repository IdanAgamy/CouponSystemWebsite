import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponComponent } from './coupon/coupon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CouponListComponent, CouponComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CouponsModule { }
