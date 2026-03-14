const hotels = [
  {
    name: "Four Points by Sheraton Lagos",
    address: "Plot 9/10 Oniru Chieftaincy Estate, Victoria Island, Lagos",
    rating: "4.5",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/4point.jpeg"),
    owner:
      "Westmont International Development Inc. (Marriott International brand)",
    about:
      "The Four Points by Sheraton Lagos is a 231-room hotel designed for the modern business traveller seeking comfort without compromise. Located in Victoria Island's Oniru Estate, it offers easy access to the Palms Shopping Mall and Lagos' thriving commercial district. Highlights include a lively sports bar with craft beers, a spa, outdoor pool, and Brazzerie Restaurant serving local and continental cuisine.",
    customerServiceContact: "09053892595",
    socialMedia: {
      facebook: "https://www.facebook.com/fourpointslagos/",
      instagram: "https://www.instagram.com/fourpoints.lagos/",
      twitter: "https://x.com/FourPointsLagos",
    },
  },
  {
    name: "Eko Hotels & Suites",
    address: "Plot 1415 Adetokunbo Ademola St, Victoria Island, Lagos",
    rating: "4.6",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/eko.jpeg"),
    owner: "Eko Hotels Ltd (owned by the Chagoury Group)",
    about:
      "Eko Hotels and Suites is one of Nigeria's largest and most iconic hospitality complexes, spanning over 10 hectares on Victoria Island. The property comprises five interconnected towers offering over 700 rooms and suites, multiple restaurants, a casino, a nightclub, tennis courts, three outdoor pools, and a private beach. It has hosted numerous heads of state, global celebrities, and major international conferences, cementing its status as Lagos' premier landmark hotel.",
    customerServiceContact: "+234 (0) 1 277 9000",
    socialMedia: {
      facebook: "https://www.facebook.com/ekohotels/",
      instagram: "https://www.instagram.com/ekohotels/",
      twitter: "https://x.com/EkoHotels",
    },
  },
  {
    name: "Lagos Continental Hotel",
    address: "52a Kofo Abayomi St, Victoria Island, Lagos",
    rating: "4.7",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/continetal.jpeg"),
    owner: "11 Plc (formerly Mobil Oil Nigeria Plc) via subsidiary",
    about:
      "Standing 23 floors tall, Lagos Continental Hotel is the tallest hospitality building in West Africa, offering 358 rooms and suites with breathtaking views of the Atlantic Ocean, Lagos Creek, and the city skyline. Located in the heart of Victoria Island's central business district, it features a 1,400 sqm Grand African Ballroom, an infinity pool, beauty spa, and a 24-hour fitness centre. It is widely regarded as the signature address of African hospitality.",
    customerServiceContact: "+234 (0) 201 336 5870",
    socialMedia: {
      facebook: "https://www.facebook.com/lagoscontinental/",
      instagram: "https://www.instagram.com/thelagoscontinental/",
      twitter: "https://x.com/TheLCHotel",
    },
  },
  {
    name: "Federal Palace Hotel and Casino",
    address: "6-8 Ahmadu Bello Way, Victoria Island, Lagos",
    rating: "4.4",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/federal.jpeg"),
    owner: "Ibru family (Ikeja Hotel Plc) / Sun International (operator)",
    about:
      "Established in 1960, the Federal Palace Hotel is one of Nigeria's most historically significant hotels — it was within its boardroom that Nigeria's Declaration of Independence was signed. Now a 150-room luxury resort overlooking the Atlantic Ocean, it features an award-winning casino, vibrant Pool Club, full gym, tennis courts, and multiple dining options. It remains a landmark of Lagos hospitality and heritage.",
    customerServiceContact: "01-2779000",
    socialMedia: {
      facebook: "https://www.facebook.com/FederalPalace/",
      instagram: "https://www.instagram.com/federalpalace/",
      twitter: "https://x.com/federalpalace",
    },
  },
  {
    name: "Lala's Lagos Boutique Hotel",
    address: "251A Sapara Williams Cl, Victoria Island, Lagos",
    rating: "4.8",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/lala.jpeg"),
    owner: "Amina Isa (Founder & Managing Director, Lala's Lagos Ltd)",
    about:
      "Lala's Lagos is a charming boutique hotel nestled in a quiet close off Victoria Island, founded in 2022 by USC graduate and entrepreneur Amina Isa. It combines warm Nigerian hospitality with a curated, homely aesthetic, making guests feel truly at home in Lagos. The property also features Lala's Bistro, an award-winning restaurant that earned second place for Best Performing Restaurant at Lagos Restaurant Week.",
    customerServiceContact: "+234 915 225 1251",
    socialMedia: {
      facebook: "https://www.facebook.com/lalaslagos/",
      instagram: "https://www.instagram.com/lalaslagos/",
    },
  },
  {
    name: "Maison Fahrenheit Hotel",
    address: "80 Adetokunbo Ademola St, Victoria Island, Lagos",
    rating: "4.2",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/maison.jpeg"),
    owner: "Anselm Tabansi",
    about:
      "Maison Fahrenheit is a stylish 30-room boutique hotel on Victoria Island, celebrated for its striking fusion of ultramodern and vintage décor inspired by the W Hotels aesthetic. Each uniquely designed room offers ocean views and designer bathrooms, while guests can dine at La Spiga restaurant or unwind at Rue 80, the hotel's iconic rooftop bar with panoramic Atlantic views. It is widely praised as one of the most visually distinct hotels in Lagos.",
    customerServiceContact: "+234 (0) 190 548 001",
    socialMedia: {
      facebook: "https://www.facebook.com/maisonfh/",
      instagram: "https://www.instagram.com/maison__fahrenheit/",
    },
  },
  {
    name: "Lagos Marriott Hotel Ikeja",
    address: "122 Joel Ogunnaike St, Ikeja GRA, Lagos",
    rating: "4.7",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/marriott.jpeg"),
    owner: "Marriott International",
    about:
      "Lagos Marriott Hotel Ikeja is a 250-room, 5-star conference hotel that sets a new standard of premium hospitality in Ikeja, Nigeria's commercial capital. It boasts four restaurants and bars — including the popular Wakame Asian restaurant and Azure Grill — alongside a world-class spa, outdoor pool, and over 14,800 sq. metres of versatile meeting and event space. Conveniently located minutes from the Murtala Muhammed International Airport, it is the go-to destination for business and leisure travellers.",
    customerServiceContact: "+234 (0) 1 279 6000",
    socialMedia: {
      facebook: "https://www.facebook.com/MarriottIkeja/",
      instagram: "https://www.instagram.com/marriottikeja/",
    },
  },
  {
    name: "Watercress Hotels & Events",
    address: "48 Oritshe St, Allen, Ikeja, Lagos",
    rating: "4.3",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/watercress.jpeg"),
    owner: "Private ownership (Watercress Hotels Ltd)",
    about:
      "Watercress Hotels & Events is a well-regarded mid-scale hotel in the heart of Allen, Ikeja, offering a comfortable and accessible base for business and leisure travellers. The property is known for its warm service, clean and modern rooms, and well-equipped event facilities suitable for meetings, private functions, and corporate gatherings. Its convenient location in one of Lagos' most active commercial neighbourhoods makes it a popular choice for local and visiting guests alike.",
    customerServiceContact: "+234 (0) 812 000 4090",
    socialMedia: {
      instagram: "https://www.instagram.com/watercresshotels/",
      facebook: "https://www.facebook.com/watercresshotels/",
    },
  },
  {
    name: "Protea Hotel Ikeja Select",
    address: "Plot 2 Assibifi Rd, Ikeja, Lagos",
    rating: "4.3",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/protea.jpeg"),
    owner: "Marriott International (Protea Hotels brand)",
    about:
      "Protea Hotel Ikeja Select is part of Marriott International's Protea Hotels brand — Africa's leading hotel brand — offering reliable comfort and service in the heart of Ikeja. The hotel provides well-appointed rooms, a restaurant, bar, outdoor pool, and modern conference facilities, catering to both business travellers and leisure guests visiting the Lagos mainland. Its location near the domestic and international airports makes it a convenient choice for transit stays.",
    customerServiceContact: "+234 (0) 1 342 4100",
    socialMedia: {
      instagram: "https://www.instagram.com/proteahotels/",
      facebook: "https://www.facebook.com/ProteaHotels/",
    },
  },
  {
    name: "Lagos Airport Hotel Ikeja",
    address: "111 Obafemi Awolowo Way, Ikeja, Lagos",
    rating: "3.9",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/lagos.png"),
    owner: "Private ownership",
    about:
      "Lagos Airport Hotel Ikeja is a well-positioned transit hotel located along the busy Obafemi Awolowo Way, offering straightforward and affordable accommodation for travellers passing through the Murtala Muhammed International Airport corridor. The hotel provides basic but functional amenities including a restaurant, bar, and conference facilities, making it a practical choice for short stays and airport layovers on the Lagos mainland.",
    customerServiceContact: "+234 (0) 1 793 6060",
    socialMedia: {
      facebook: "https://www.facebook.com/lagosairporthotel/",
    },
  },
  {
    name: "Presken Hotels",
    address: "144 Obafemi Awolowo Way, Allen, Ikeja, Lagos",
    rating: "4.4",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/presken.jpeg"),
    owner: "Presken Group",
    about:
      "Presken Hotels is a proudly Nigerian hospitality brand with a flagship property on Obafemi Awolowo Way in Allen, Ikeja. The hotel offers contemporary rooms, a restaurant, bar, swimming pool, and versatile event spaces that have made it a popular venue for corporate events, weddings, and social gatherings. As part of the wider Presken Group, the hotel reflects the brand's commitment to delivering quality and value-driven hospitality across Nigeria.",
    customerServiceContact: "+234 (0) 1 342 0950",
    socialMedia: {
      instagram: "https://www.instagram.com/preskenhotels/",
      facebook: "https://www.facebook.com/preskenhotels/",
      twitter: "https://x.com/PreskenHotels",
    },
  },
  {
    name: "Li Tour International Hotel",
    address: "54 Adeniyi Jones, Ikeja, Lagos",
    rating: "4.6",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/litour.jpeg"),
    owner: "Li Tour International Ltd",
    about:
      "Li Tour International Hotel is a well-regarded property on Adeniyi Jones, one of Ikeja's most vibrant commercial streets. Known for its warm hospitality, clean and spacious rooms, and attentive service, it consistently receives strong reviews from both business and leisure guests. The hotel offers a restaurant, bar, and meeting facilities, and is conveniently close to major banks, shopping centres, and the domestic airport.",
    customerServiceContact: "+234 (0) 809 000 4600",
    socialMedia: {
      instagram: "https://www.instagram.com/litourrenternationalhotel/",
      facebook: "https://www.facebook.com/litourinternationalhotel/",
    },
  },
  {
    name: "Providha Hotel & Suites",
    address: "79 Mobolaji Bank Anthony Way, Opebi, Ikeja, Lagos",
    rating: "4.4",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/providha.jpeg"),
    owner: "Providha Hotels Ltd",
    about:
      "Providha Hotel & Suites is a stylish and modern property situated along Mobolaji Bank Anthony Way in Opebi, offering an excellent blend of comfort and value in the heart of Ikeja. The hotel features elegantly furnished rooms and suites, a rooftop bar, restaurant, swimming pool, and event space suitable for corporate and social occasions. Its strategic location on one of Lagos' key business corridors makes it a favourite among professionals and frequent visitors to the mainland.",
    customerServiceContact: "+234 (0) 810 860 1111",
    socialMedia: {
      instagram: "https://www.instagram.com/providhahotel/",
      facebook: "https://www.facebook.com/providhahotel/",
    },
  },
  {
    name: "Lilygate Hotel",
    address: "2 Olubunmi Owa St, Lekki Phase 1, Lagos",
    rating: "4.4",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/lilygate.jpeg"),
    owner: "Lilygate Hotels Ltd",
    about:
      "Lilygate Hotel is a refined boutique property tucked away on a quiet street in Lekki Phase 1, offering a serene escape from the bustle of Lagos city life. The hotel is well-loved for its attentive customer service, tastefully designed rooms, a restaurant serving local and international cuisine, and an outdoor pool area ideal for relaxation. Its location provides easy access to Victoria Island, Ikoyi, and the wider Lekki corridor.",
    customerServiceContact: "+234 (0) 1 453 0550",
    socialMedia: {
      instagram: "https://www.instagram.com/lilygatehotelag/",
      facebook: "https://www.facebook.com/lilygatehotelag/",
    },
  },
  {
    name: "Golden Tulip Lekki",
    address: "18 Obafemi Anibaba St, Lekki Phase 1, Lagos",
    rating: "4.5",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/golden.jpeg"),
    owner: "Private ownership (Golden Tulip brand — Louvre Hotels Group)",
    about:
      "Golden Tulip Lekki is an international luxury boutique hotel offering 32 individually appointed en-suite rooms and suites along the scenic Lekki Peninsula. Tucked off the busy Admiralty Way, it provides a tranquil yet central retreat with easy access to Victoria Island, Ikoyi, and the Lekki-Ikoyi Link Bridge. The ODODO Restaurant serves local and continental buffets, while the poolside bar and signature cocktail lounge create an inviting atmosphere for guests.",
    customerServiceContact: "+234 (0) 810 000 5056",
    socialMedia: {
      instagram: "https://www.instagram.com/goldentuliplekkihotel/",
      facebook: "https://www.facebook.com/goldentuliplekki/",
    },
  },
  {
    name: "Monty Suites Lekki",
    address: "16 Adebayo Doherty Rd, Lekki Phase 1, Lagos",
    rating: "4.3",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/monty.jpeg"),
    owner: "Monty Suites Ltd",
    about:
      "Monty Suites Lekki is a comfortable and modern apartment-style hotel on Adebayo Doherty Road, a central artery of Lekki Phase 1. It caters to both short-term visitors and extended-stay guests, offering well-furnished rooms and suites with home-like amenities, a restaurant, and on-site security. Its location puts guests within easy reach of Lekki's restaurants, nightlife, and business hubs, making it a popular choice for professionals and leisure travellers.",
    customerServiceContact: "+234 (0) 810 000 6200",
    socialMedia: {
      instagram: "https://www.instagram.com/montysuites/",
      facebook: "https://www.facebook.com/montysuites/",
    },
  },
  {
    name: "George Residence",
    address: "16B Admiralty Rd, Lekki Phase 1, Lagos",
    rating: "4.5",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/george.jpeg"),
    owner: "George Residence Ltd",
    about:
      "George Residence is a luxury serviced apartment brand with properties across prime Lagos neighbourhoods including Lekki, Victoria Island, Ikoyi, and Abuja. Recognised as a CNN Partner Hotel, the brand is celebrated for its contemporary design, world-class hospitality, and premium self-catering facilities ideal for short and long stays. Each property provides guests with the comfort of home and the service standards of a five-star hotel.",
    customerServiceContact: "+234 (0) 810 500 5000",
    socialMedia: {
      instagram: "https://www.instagram.com/georgeresidenceafrica/",
      facebook: "https://www.facebook.com/georgeresidence/",
    },
  },
  {
    name: "The Bickley Park Hotel",
    address: "Plot C, Blk 12E Admiralty Way, Lekki Phase 1, Lagos",
    rating: "4.6",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/bickley.jpeg"),
    owner: "Private ownership (The Bickley Park Hotel Ltd)",
    about:
      "The Bickley Park Hotel is an intimate luxury boutique property nestled along the picturesque Admiralty Way in Lekki Phase 1, just minutes from the Lekki-Ikoyi Link Bridge. Offering 50 elegantly appointed rooms, suites, and apartments, the hotel is celebrated for its illuminated outdoor pool, serene ambiance, spa, and personalised round-the-clock guest services. Its prime waterfront setting and refined atmosphere make it one of Lekki's most sought-after hospitality destinations.",
    customerServiceContact: "+234 (0) 706 336 2601",
    socialMedia: {
      facebook: "https://www.facebook.com/bickleyparklagos/",
      instagram: "https://www.instagram.com/thebickleyparkhotel/",
    },
  },
  {
    name: "Victoria Suites Hotel",
    address: "8 Razak Balogun St, Surulere, Lagos",
    rating: "3.5",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/victoria.jpeg"),
    owner: "Private ownership (Victoria Suites Ltd)",
    about:
      "Victoria Suites Hotel is a budget-friendly accommodation option located on Razak Balogun Street in Surulere, one of Lagos' most lively and culturally rich mainland neighbourhoods. The hotel offers clean and functional rooms alongside a restaurant and basic amenities suited to guests seeking affordable stays close to the business and entertainment hubs of the Lagos mainland. Surulere's proximity to the National Stadium and commercial areas makes it convenient for a range of travellers.",
    customerServiceContact: "+234 (0) 810 000 7711",
    socialMedia: {
      facebook: "https://www.facebook.com/victoriasuites/",
    },
  },
  {
    name: "The George Lagos Hotel",
    address: "30 Lugard Ave, Ikoyi, Lagos",
    rating: "4.5",
    roomType: ["standard", "semi-deluxe", "deluxe"],
    image: require("../assets/thegeorge.jpeg"),
    owner: "Private ownership (The George Lagos Ltd)",
    about:
      "The George Lagos is a prestigious 61-room boutique hotel set in the leafy, upscale suburb of Ikoyi, celebrated for its exceptional service and artistic ambiance. Each floor of the property pays homage to a great Renaissance artist, with curated artworks woven throughout the interiors, including the renowned Da Vinci Bar & Restaurant and Otium cocktail lounge. Frequently praised as a hidden gem, it is a preferred retreat for diplomats, business executives, and discerning leisure travellers in Lagos.",
    customerServiceContact: "+234 (0) 1 454 0860",
    socialMedia: {
      facebook: "https://www.facebook.com/thegeorgelagos/",
      instagram: "https://www.instagram.com/thegeorgelagos/",
    },
  },
];

export default hotels;
