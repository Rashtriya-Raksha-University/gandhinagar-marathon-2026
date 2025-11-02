// types/race.types.ts

export interface Discount {
  group: string;
  discount: string;
  fee: string;
}

export interface PricingPlan {
  planName: string;
  planPrice: string;
  cancelPrice: string;
  tag: string;
  planDescp: string;
  tags: string[];
  discounts: Discount[] | string[];
  slug: string;
  eligibility: string;
}

export interface PartnerLogo {
  logo: string;
}

export interface PricingData {
  data: PricingPlan[];
  partnerLogo: PartnerLogo[];
}

export interface PageData {
  pricingData: PricingData;
}
