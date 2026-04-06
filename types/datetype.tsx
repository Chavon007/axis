export interface BookingDate {
  checkInDate: string;
  checkOutDate: string;
  fullname: string;
  roomid: string;
}

export interface PriceResult {
  nights: number;
  total: number;
  succes: boolean;
}
