interface HotelDetailsListing {
  name: string;
  address: string;
  rating: string;
  roomType: string[];
  image: any;
  owner: string;
  customerServiceContact: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  about: string;
}

export default HotelDetailsListing;
