export interface Car {
  id: string;
  name: string;
  type: string;
  transmission: string;
  seats: number;
  pricePerDay: number;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    topSpeed: string;
    acceleration: string;
    fuelType: string;
  };
  imageUrl: string;
  gallery: string[];
}

export const carData: Car[] = [
  {
    id: "luxury-sedan-1",
    name: "Mercedes S-Class",
    type: "Luxury Sedan",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 299,
    shortDescription: "Premium luxury sedan with exceptional comfort",
    description: "The Mercedes S-Class stands as the pinnacle of luxury sedans, offering an unmatched combination of opulence, technology, and driving dynamics. With its plush interior, advanced safety features, and powerful yet efficient engine, the S-Class provides an extraordinary driving experience. Perfect for business executives, special occasions, or anyone seeking the ultimate in automotive luxury.",
    features: [
      "Heated and ventilated seats",
      "Panoramic sunroof",
      "Premium Burmester sound system",
      "Advanced driver assistance systems",
      "4-zone climate control",
      "Ambient lighting with 64 colors"
    ],
    specifications: {
      engine: "4.0L V8 Biturbo",
      power: "496 HP",
      topSpeed: "155 mph (limited)",
      acceleration: "0-60 mph in 4.5s",
      fuelType: "Premium Gasoline"
    },
    imageUrl: "https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6894430/pexels-photo-6894430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6894431/pexels-photo-6894431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "sports-car-1",
    name: "Porsche 911",
    type: "Sports Car",
    transmission: "PDK Automatic",
    seats: 2,
    pricePerDay: 399,
    shortDescription: "Iconic sports car with exhilarating performance",
    description: "The Porsche 911 is an automotive icon that has been thrilling drivers for generations. With its distinctive silhouette, rear-engine layout, and precise handling, the 911 offers an authentic sports car experience like no other. The current generation combines the model's legendary performance characteristics with modern technology and comfort features, making it suitable for both track days and daily driving.",
    features: [
      "Sport Chrono Package",
      "Adaptive sport seats",
      "Carbon ceramic brakes",
      "Bose surround sound system",
      "Sport exhaust system",
      "Lane change assist"
    ],
    specifications: {
      engine: "3.0L Twin-Turbo Flat-6",
      power: "443 HP",
      topSpeed: "191 mph",
      acceleration: "0-60 mph in 3.5s",
      fuelType: "Premium Gasoline"
    },
    imageUrl: "https://images.pexels.com/photos/3802509/pexels-photo-3802509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3802513/pexels-photo-3802513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "suv-1",
    name: "Range Rover Sport",
    type: "Luxury SUV",
    transmission: "Automatic",
    seats: 7,
    pricePerDay: 349,
    shortDescription: "Versatile SUV combining luxury and capability",
    description: "The Range Rover Sport represents the perfect balance of luxury, performance, and off-road capability. With its commanding presence, sophisticated interior, and advanced terrain response system, this premium SUV excels in any environment. Whether navigating urban streets or venturing off the beaten path, the Range Rover Sport delivers an exceptional driving experience with the versatility to accommodate passengers and cargo in supreme comfort.",
    features: [
      "Terrain Response 2 system",
      "Meridian™ sound system",
      "Full-size panoramic roof",
      "Interactive driver display",
      "Adaptive Dynamics",
      "Wade sensing for off-road"
    ],
    specifications: {
      engine: "3.0L Turbocharged I6",
      power: "395 HP",
      topSpeed: "145 mph",
      acceleration: "0-60 mph in 5.7s",
      fuelType: "Premium Gasoline"
    },
    imageUrl: "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3786093/pexels-photo-3786093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "convertible-1",
    name: "BMW 4 Series Convertible",
    type: "Luxury Convertible",
    transmission: "Automatic",
    seats: 4,
    pricePerDay: 275,
    shortDescription: "Elegant convertible for open-air driving pleasure",
    description: "The BMW 4 Series Convertible offers the perfect combination of sporty performance and open-top enjoyment. With its retractable hardtop, you can transform from a sleek coupe to a sun-loving convertible in seconds. The refined interior features premium materials and cutting-edge technology, while the powerful engine and balanced chassis deliver the engaging driving dynamics BMW is known for. Ideal for coastal drives or making a statement in the city.",
    features: [
      "Retractable hardtop roof",
      "Neck warmers for cold-weather top-down driving",
      "Harman Kardon surround sound",
      "Sport seats with memory function",
      "Wind deflector",
      "Adaptive LED headlights"
    ],
    specifications: {
      engine: "2.0L TwinPower Turbo",
      power: "255 HP",
      topSpeed: "155 mph (limited)",
      acceleration: "0-60 mph in 5.9s",
      fuelType: "Premium Gasoline"
    },
    imageUrl: "https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/570071/pexels-photo-570071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "electric-1",
    name: "Tesla Model S",
    type: "Electric Sedan",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 325,
    shortDescription: "High-performance electric sedan with cutting-edge technology",
    description: "The Tesla Model S redefines what a car can be with its revolutionary electric powertrain, minimalist interior, and advanced autopilot capabilities. Experience instant torque and silent acceleration that rivals supercars, paired with practical range for long journeys. The sleek exterior houses a spacious cabin dominated by the 17-inch touchscreen that controls nearly all vehicle functions. Perfect for tech enthusiasts and forward-thinking drivers who want performance without compromise.",
    features: [
      "Autopilot with advanced safety features",
      "17-inch touchscreen control center",
      "Over-the-air software updates",
      "Premium audio system",
      "Bioweapon defense mode air filtration",
      "Glass roof with UV protection"
    ],
    specifications: {
      engine: "Dual Motor Electric",
      power: "670 HP",
      topSpeed: "155 mph",
      acceleration: "0-60 mph in 3.1s",
      fuelType: "Electric"
    },
    imageUrl: "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2277458/pexels-photo-2277458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "luxury-coupe-1",
    name: "Audi RS7",
    type: "Luxury Coupe",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 375,
    shortDescription: "Four-door coupe with supercar performance",
    description: "The Audi RS7 combines breathtaking design with exhilarating performance in a practical four-door coupe package. Its sleek, fastback silhouette conceals a twin-turbocharged V8 engine that delivers supercar-level acceleration. Inside, you'll find a driver-focused cockpit featuring Audi's cutting-edge Virtual Cockpit and premium materials throughout. With its adaptive air suspension and quattro all-wheel drive, the RS7 provides exceptional handling in all conditions.",
    features: [
      "Audi Virtual Cockpit Plus",
      "Bang & Olufsen 3D sound system",
      "HD Matrix LED headlights with laser light",
      "Adaptive air suspension",
      "Quattro all-wheel drive with sport differential",
      "Valcona leather interior with honeycomb stitching"
    ],
    specifications: {
      engine: "4.0L Twin-Turbo V8",
      power: "591 HP",
      topSpeed: "174 mph",
      acceleration: "0-60 mph in 3.5s",
      fuelType: "Premium Gasoline"
    },
    imageUrl: "https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
];