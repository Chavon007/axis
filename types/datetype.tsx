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

export interface payment {
  email: string;
  amount: number;
  checkindate: string;
  checkoutdate: string;
  roomid: string;
  fullname: string;
  formid: string;
}
