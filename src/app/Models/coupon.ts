export class Coupon {
  constructor (public couponId?: number,
               public couponTitle?: string,
               public couponStartDate?: Date,
               public couponEndDate?: Date,
               public couponAmount?: number,
               public couponType?: number,
               public couponMessage?: string,
               public couponPrice?: number,
               public couponImage?: string,
               public companyID?: number
               ) {}
              }
