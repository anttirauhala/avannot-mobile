export interface openingHour {
  day: number;
  from: string;
  to: string;
}

export interface PaymentOptions {
  mobilePay: boolean;
  smartum: boolean;
  smartumMobile: boolean;
  tyky: boolean;
  tykyOnline: boolean;
  ePassi: boolean;
  virike: boolean;
  cash: boolean;
  card: boolean;
}

export interface IceHole {
  id: string;
  name: string;
  address: string;
  city: string;
  description: string;
  notes: string[];
  openingHours: openingHour[];
  homePage: string;
  payment: PaymentOptions;
  basicPrice: number;
}
