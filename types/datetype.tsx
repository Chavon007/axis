export interface BookingDate {
  checkInDate: string;
  checkOutDate: string;
}

export interface PriceResult {
  nights: number;
  total: number;
  succes: boolean;
}