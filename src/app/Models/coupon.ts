export class Coupon {
  constructor (public couponId?: number,
               public couponTitle?: string,
               public couponStartDate?: Date,
               public couponEndDate?: Date,
              //  public couponStartDate?: string,
              //  public couponEndDate?: string,
               public couponAmount?: number,
               public couponType?: string,
               public couponMessage?: string,
               public couponPrice?: number,
               public couponImage?: string,
               public companyID?: number
               ) {}
              }
