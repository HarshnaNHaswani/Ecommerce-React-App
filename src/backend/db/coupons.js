import { v4 as uuid } from "uuid";

export const coupons = [
  {
    _id: uuid(),
    couponDescription: "50% off",
    coupon: "50",
    couponCode: "SHOP50",
    maxDiscount: "450"
  },
  {
    _id: uuid(),
    couponDescription: "30% off",
    coupon: "30",
    couponCode: "SHOP30",
    maxDiscount: "700"
  },
];
