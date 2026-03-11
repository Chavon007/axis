const hotels = [
  {
    name: "Radisson Blu Anchorage Hotel, Lagos",
    address: "1a Ozumba Mbadiwe Ave, Victoria Island, Lagos",
    rating: "4.7",
    roomType: "deluxe",
    image:
      "https://www.radissonhotels.com/assets/images/hotels/lagos-anchorage/overview-image-radisson-blu-anchorage-hotel-lagos-1920x1080.jpg",
  },
  {
    name: "Four Points by Sheraton Lagos",
    address: "Plot 9/10 Oniru Chieftaincy Estate, Victoria Island, Lagos",
    rating: "4.5",
    roomType: "deluxe",
    image:
      "https://cache.marriott.com/marriottassets/marriott/LOSLG/loslg-exterior-0027-hor-wide.jpg",
  },
  {
    name: "Lagos Continental Hotel",
    address: "52a Kofo Abayomi St, Victoria Island, Lagos",
    rating: "4.7",
    roomType: "deluxe",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6c/8f/4e/lagos-continental-hotel.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Federal Palace Hotel and Casino",
    address: "6-8 Ahmadu Bello Way, Victoria Island, Lagos",
    rating: "4.4",
    roomType: "deluxe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Federal_Palace_Hotel_%26_Casino_Victoria_Island_Lagos.JPG",
  },
  {
    name: "Lala's Lagos Boutique Hotel",
    address: "251A Sapara Williams Cl, Victoria Island, Lagos",
    rating: "4.8",
    roomType: "standard",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/55/47/88/lala-s-lagos-boutique.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Maison Fahrenheit Hotel",
    address: "80 Adetokunbo Ademola St, Victoria Island, Lagos",
    rating: "4.2",
    roomType: "standard",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/61/1e/8e/maison-fahrenheit-hotel.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Lagos Marriott Hotel Ikeja",
    address: "122 Joel Ogunnaike St, Ikeja GRA, Lagos",
    rating: "4.7",
    roomType: "deluxe",
    image:
      "https://cache.marriott.com/marriottassets/marriott/LOSMC/losmc-exterior-0029-hor-wide.jpg",
  },
  {
    name: "Watercress Hotels & Events",
    address: "48 Oritshe St, Allen, Ikeja, Lagos",
    rating: "4.3",
    roomType: "standard",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c9/ae/d4/watercress-hotel.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Protea Hotel Ikeja Select",
    address: "Plot 2 Assibifi Rd, Ikeja, Lagos",
    rating: "4.3",
    roomType: "semi-deluxe",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f2/a0/3c/protea-hotel-ikeja-select.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Lagos Airport Hotel Ikeja",
    address: "111 Obafemi Awolowo Way, Ikeja, Lagos",
    rating: "3.9",
    roomType: "standard",
    image:
      "https://www.lagosairporthotel.com/wp-content/uploads/2020/01/Lagos-Airport-Hotel-Exterior.jpg",
  },
  {
    name: "Presken Hotels",
    address: "144 Obafemi Awolowo Way, Allen, Ikeja, Lagos",
    rating: "4.4",
    roomType: "standard",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8c/2e/f4/presken-hotel.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Li Tour International Hotel",
    address: "54 Adeniyi Jones, Ikeja, Lagos",
    rating: "4.6",
    roomType: "semi-deluxe",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/08/fc/8a/li-tour-international.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Providha Hotel & Suites",
    address: "79 Mobolaji Bank Anthony Way, Opebi, Ikeja, Lagos",
    rating: "4.4",
    roomType: "semi-deluxe",
    image:
      "https://providhahotel.com/wp-content/uploads/2021/06/providha-hotel-exterior.jpg",
  },
  {
    name: "Lilygate Hotel",
    address: "2 Olubunmi Owa St, Lekki Phase 1, Lagos",
    rating: "4.4",
    roomType: "semi-deluxe",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/73/d6/d9/lilygate-hotel.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Golden Tulip Lekki",
    address: "18 Obafemi Anibaba St, Lekki Phase 1, Lagos",
    rating: "4.5",
    roomType: "deluxe",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/30/6d/56/golden-tulip-lekki.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Monty Suites Lekki",
    address: "16 Adebayo Doherty Rd, Lekki Phase 1, Lagos",
    rating: "4.3",
    roomType: "semi-deluxe",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/c5/38/1d/monty-suites.jpg?w=1200&h=800&s=1",
  },
  {
    name: "George Residence",
    address: "16B Admiralty Rd, Lekki Phase 1, Lagos",
    rating: "4.5",
    roomType: "standard",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6b/3e/2e/george-residence.jpg?w=1200&h=800&s=1",
  },
  {
    name: "The Bickley Park Hotel",
    address: "Plot C, Blk 12E Admiralty Way, Lekki Phase 1, Lagos",
    rating: "4.6",
    roomType: "deluxe",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/37/ec/c8/bickley-park-hotel.jpg?w=1200&h=800&s=1",
  },
  {
    name: "Victoria Suites Hotel",
    address: "8 Razak Balogun St, Surulere, Lagos",
    rating: "3.5",
    roomType: "standard",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/65/c2/b1/victoria-suites-hotel.jpg?w=1200&h=800&s=1",
  },
  {
    name: "The George Lagos Hotel",
    address: "30 Lugard Ave, Ikoyi, Lagos",
    rating: "4.5",
    roomType: "deluxe",
    image:
      "https://thegeorgelagos.com/wp-content/uploads/2019/10/the-george-hotel-lagos-exterior.jpg",
  },
];

export default hotels;