export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "hot-cold" | "specialty" | "chilled-dessert";
  capacity: string;
  flavour: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  referenceImage?: string;
  pricing: {
    amount: number;
    amountMax?: number;
    pieces: number;
    unitPrice: string;
    note: string;
    isConfirmed: boolean;
    confirmationNote?: string;
  };
  features: string[];
  bestFor: string[];
  specs: {
    capacity: string;
    holdingTime: string;
    temperatureRange: string;
    shelfLife: string;
    dietary: string[];
    packaging: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "chocolate-cup",
    name: "Chocolate Edible Cup",
    tagline: "Rich roasted cocoa biscuit crunch",
    category: "hot-cold",
    capacity: "100 ml",
    flavour: "Chocolate",
    shortDescription: "Crispy waffle biscuit cup infused with rich cocoa. Perfectly complements hot espresso, cappuccino, or dark hot chocolate.",
    fullDescription: "Crafted from fine food-grade grains and rich roasted cocoa, the Chocolate Edible Cup offers a satisfying crunch that transforms every sip into a treat. Baked to withstand hot beverages without softening prematurely.",
    image: "/images/cup-chocolate-latte.jpg",
    referenceImage: "/images/ref-wholesale-trio-offer.jpg",
    pricing: {
      amount: 3999,
      pieces: 396,
      unitPrice: "₹10.10 / cup",
      note: "Part of the standard 3-flavour wholesale offer (396 cups for ₹3,999 with delivery included all over India).",
      isConfirmed: true,
    },
    features: [
      "100% Edible & crunchy",
      "Infused with natural cocoa",
      "Leak-proof for 30+ minutes",
      "Pure Vegetarian & Vegan friendly",
      "Delivery included across India",
    ],
    bestFor: ["Espresso & Cappuccino", "Hot Chocolate", "Dessert Shots", "Mocha"],
    specs: {
      capacity: "100 ml",
      holdingTime: "30-45 minutes with hot beverages",
      temperatureRange: "Up to 85°C hot / 4°C cold",
      shelfLife: "6 months from manufacture date (airtight storage)",
      dietary: ["100% Pure Veg", "Vegan Friendly", "Zero Plastic"],
      packaging: "Bulk commercial food-grade carton pack",
    },
  },
  {
    id: "vanilla-cup",
    name: "Vanilla Edible Cup",
    tagline: "Delicate sweet floral vanilla crunch",
    category: "hot-cold",
    capacity: "100 ml",
    flavour: "Vanilla",
    shortDescription: "Sweet aromatic vanilla wafer cup. The versatile pairing for artisan teas, mild coffees, and soft-serve ice cream.",
    fullDescription: "A timeless classic. The Vanilla Edible Cup has a gentle sweetness with notes of warm vanilla bean that pairs harmoniously with masala chai, filter coffee, or a scoop of gourmet gelato.",
    image: "/images/cup-vanilla-chai.jpg",
    referenceImage: "/images/ref-wholesale-trio-offer.jpg",
    pricing: {
      amount: 3999,
      pieces: 396,
      unitPrice: "₹10.10 / cup",
      note: "Part of the standard 3-flavour wholesale offer (396 cups for ₹3,999 with delivery included all over India).",
      isConfirmed: true,
    },
    features: [
      "100% Edible sweet biscuit",
      "Aromatic vanilla essence",
      "Holds hot liquids without dissolving",
      "Pure Vegetarian",
      "Pan-India shipping included",
    ],
    bestFor: ["Masala Chai", "Filter Coffee", "Vanilla Sundaes", "Warm Milk"],
    specs: {
      capacity: "100 ml",
      holdingTime: "30-45 minutes with hot beverages",
      temperatureRange: "Up to 85°C hot / 4°C cold",
      shelfLife: "6 months from manufacture date",
      dietary: ["100% Pure Veg", "Eco-Friendly"],
      packaging: "Bulk commercial food-grade carton pack",
    },
  },
  {
    id: "elaichi-cup",
    name: "Elaichi (Cardamom) Edible Cup",
    tagline: "Authentic royal green cardamom aroma",
    category: "hot-cold",
    capacity: "100 ml",
    flavour: "Elaichi (Cardamom)",
    shortDescription: "Infused with aromatic green cardamom. An absolute sensation for authentic Indian chai lovers and festive dessert servings.",
    fullDescription: "Specially formulated for traditional Indian taste profiles. The subtle, refreshing aroma of cardamom blossoms as warm tea fills the cup, culminating in a crunchy, spiced biscuit dessert after finishing your drink.",
    image: "/images/cup-elaichi-icecream.jpg",
    referenceImage: "/images/ref-wholesale-trio-offer.jpg",
    pricing: {
      amount: 3999,
      pieces: 396,
      unitPrice: "₹10.10 / cup",
      note: "Part of the standard 3-flavour wholesale offer (396 cups for ₹3,999 with delivery included all over India).",
      isConfirmed: true,
    },
    features: [
      "Fragrant green cardamom infusion",
      "Authentic desi chai pairing",
      "100% Edible & biodegradable",
      "Pure Vegetarian",
      "Free shipping across India",
    ],
    bestFor: ["Cutting Chai & Masala Tea", "Kulfi Servings", "Kheer & Halwa Shots", "Golden Milk"],
    specs: {
      capacity: "100 ml",
      holdingTime: "30-45 minutes with hot beverages",
      temperatureRange: "Up to 85°C hot / 4°C cold",
      shelfLife: "6 months from manufacture date",
      dietary: ["100% Pure Veg", "Natural Cardamom Flavour"],
      packaging: "Bulk commercial food-grade carton pack",
    },
  },
  {
    id: "chocolate-coated-cup",
    name: "Chocolate-Coated Edible Cup",
    tagline: "Luxurious chocolate rim & inner coating",
    category: "specialty",
    capacity: "100 ml",
    flavour: "Chocolate Glazed",
    shortDescription: "Premium biscuit wafer cup lined with rich chocolate coating. The supreme decadent experience that doubles as dessert.",
    fullDescription: "Our flagship luxury offering. Each cup features an indulgent coating of smooth chocolate on the rim and inside. As warm coffee or milk is poured, the chocolate gently softens, flavoring the beverage and creating an irresistible melted biscuit bite at the end.",
    image: "/images/cup-chocolate-coated-marble.jpg",
    referenceImage: "/images/ref-chocolate-coated-offer.jpg",
    pricing: {
      amount: 4499,
      pieces: 200,
      unitPrice: "₹22.50 / piece",
      note: "Confirmed promotional offer: ₹4,499 for 200 pieces in single pouch packaging with shipping included all over India.",
      isConfirmed: true,
    },
    features: [
      "Signature chocolate glaze rim",
      "Individually protected single pouch packaging",
      "Extra leak barrier from chocolate lining",
      "Pure Veg & Vegan verified",
      "FSSAI Licensed for wholesale & retail",
    ],
    bestFor: ["Luxury Cafe Specials", "Hot Mochas", "Affogato", "Weddings & VIP Catering"],
    specs: {
      capacity: "100 ml",
      holdingTime: "40+ minutes leak-proof",
      temperatureRange: "Up to 80°C hot / Chilled beverages",
      shelfLife: "6 months in cool dry environment (below 25°C)",
      dietary: ["100% Pure Veg", "Vegan Verified", "FSSAI Licensed"],
      packaging: "200 Pcs Single Pouch Packing (Individually Sealed)",
    },
  },
  {
    id: "cold-coffee-shake-cup",
    name: "Cold Coffee & Shake Edible Cup",
    tagline: "Reinforced 150 ml capacity for chilled drinks",
    category: "chilled-dessert",
    capacity: "150 ml",
    flavour: "Waffle Cookie with Dark Drizzle Rim",
    shortDescription: "Specially enlarged 150ml cup engineered with reinforced walls for chilled frappes, thick milkshakes, and sundae glasses.",
    fullDescription: "Designed for cold beverage menus. The 150 ml capacity provides ample room for ice cubes, thick milkshakes, whipped cream peaks, and decadent dessert garnishes without any compromise on structural integrity.",
    image: "/images/cup-cold-coffee-shake.jpg",
    referenceImage: "/images/ref-cold-coffee-offer.jpg",
    pricing: {
      amount: 4326,
      amountMax: 6500,
      pieces: 150, // indicative wholesale batch
      unitPrice: "₹4,326 – ₹6,500 / pack range",
      note: "Listed delivery-inclusive offer: ₹4,326 to ₹6,500. Exact pricing tier and pack quantity subject to official business confirmation.",
      isConfirmed: false,
      confirmationNote: "Wholesale quantity & exact tier currently pending founder confirmation. Please enquire for today's live rate.",
    },
    features: [
      "Generous 150 ml beverage capacity",
      "Extra structural reinforcement for cold shakes & ice",
      "Supports whipped cream & syrup drizzles",
      "100% Edible & Zero Plastic",
      "Pan-India delivery available",
    ],
    bestFor: ["Cold Coffee & Frappes", "Thick Milkshakes", "Ice Cream Sundaes", "Loaded Dessert Glasses"],
    specs: {
      capacity: "150 ml",
      holdingTime: "45+ minutes with chilled beverages & ice",
      temperatureRange: "Ideal for 0°C to 20°C cold drinks",
      shelfLife: "6 months from manufacture date",
      dietary: ["100% Pure Veg", "Eco-Friendly Sustainable"],
      packaging: "Protective corrugated wholesale master carton",
    },
  },
];

