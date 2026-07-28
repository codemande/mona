/**
 * Devices mock data
 * Supported brands and models with protection pricing in NGN.
 */

export const BRANDS = [
  {
    id: "apple",
    name: "Apple",
    displayName: "Apple iPhone",
    logoText: "iPhone",
    iconName: "Smartphone",
    description: "Protection and flexible repairs for iPhone 11 series through iPhone 16 Pro Max."
  },
  {
    id: "samsung",
    name: "Samsung",
    displayName: "Samsung Galaxy",
    logoText: "Galaxy",
    iconName: "Smartphone",
    description: "Comprehensive coverage for Galaxy S series, Z Fold/Flip, and A series."
  },
  {
    id: "google",
    name: "Google",
    displayName: "Google Pixel",
    logoText: "Pixel",
    iconName: "Smartphone",
    description: "Official protection plans for Pixel 6 through Pixel 9 Pro XL."
  }
];

export const MODELS = [
  // Apple iPhone Models
  {
    id: "iphone-16-pro-max",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    priceAnnual: 48000,
    priceMonthly: 4500,
    estimatedRetailPrice: 2100000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-16-pro",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    priceAnnual: 42000,
    priceMonthly: 3900,
    estimatedRetailPrice: 1850000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-16",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 16",
    slug: "iphone-16",
    priceAnnual: 36000,
    priceMonthly: 3400,
    estimatedRetailPrice: 1450000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-15-pro-max",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    priceAnnual: 42000,
    priceMonthly: 3900,
    estimatedRetailPrice: 1750000,
    releaseYear: 2023,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-15-pro",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    priceAnnual: 38000,
    priceMonthly: 3500,
    estimatedRetailPrice: 1500000,
    releaseYear: 2023,
    popular: false,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-15",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 15",
    slug: "iphone-15",
    priceAnnual: 32000,
    priceMonthly: 3000,
    estimatedRetailPrice: 1200000,
    releaseYear: 2023,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-14-pro-max",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    priceAnnual: 36000,
    priceMonthly: 3300,
    estimatedRetailPrice: 1350000,
    releaseYear: 2022,
    popular: false,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-14",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 14",
    slug: "iphone-14",
    priceAnnual: 28000,
    priceMonthly: 2600,
    estimatedRetailPrice: 950000,
    releaseYear: 2022,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },
  {
    id: "iphone-13",
    brandId: "apple",
    brandName: "Apple",
    modelName: "iPhone 13",
    slug: "iphone-13",
    priceAnnual: 24000,
    priceMonthly: 2200,
    estimatedRetailPrice: 750000,
    releaseYear: 2021,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },

  // Samsung Galaxy Models
  {
    id: "samsung-galaxy-s25-ultra",
    brandId: "samsung",
    brandName: "Samsung",
    modelName: "Samsung Galaxy S25 Ultra",
    slug: "samsung-galaxy-s25-ultra",
    priceAnnual: 46000,
    priceMonthly: 4300,
    estimatedRetailPrice: 2000000,
    releaseYear: 2025,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["AMOLED Display Repair", "Liquid Damage Protection", "Camera Lens & Glass Protection", "Original Samsung Parts"]
  },
  {
    id: "samsung-galaxy-s24-ultra",
    brandId: "samsung",
    brandName: "Samsung",
    modelName: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    priceAnnual: 42000,
    priceMonthly: 3900,
    estimatedRetailPrice: 1700000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["AMOLED Display Repair", "Liquid Damage Protection", "Camera Lens & Glass Protection", "Original Samsung Parts"]
  },
  {
    id: "samsung-galaxy-s24-plus",
    brandId: "samsung",
    brandName: "Samsung",
    modelName: "Samsung Galaxy S24+",
    slug: "samsung-galaxy-s24-plus",
    priceAnnual: 34000,
    priceMonthly: 3200,
    estimatedRetailPrice: 1300000,
    releaseYear: 2024,
    popular: false,
    inspectionRequired: true,
    coverageHighlights: ["AMOLED Display Repair", "Liquid Damage Protection", "Camera Lens & Glass Protection", "Original Samsung Parts"]
  },
  {
    id: "samsung-galaxy-s24",
    brandId: "samsung",
    brandName: "Samsung",
    modelName: "Samsung Galaxy S24",
    slug: "samsung-galaxy-s24",
    priceAnnual: 30000,
    priceMonthly: 2800,
    estimatedRetailPrice: 1050000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["AMOLED Display Repair", "Liquid Damage Protection", "Camera Lens & Glass Protection", "Original Samsung Parts"]
  },
  {
    id: "samsung-galaxy-z-fold-6",
    brandId: "samsung",
    brandName: "Samsung",
    modelName: "Samsung Galaxy Z Fold 6",
    slug: "samsung-galaxy-z-fold-6",
    priceAnnual: 54000,
    priceMonthly: 5000,
    estimatedRetailPrice: 2400000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Folding Screen Protection", "Hinge & Structural Repairs", "Liquid Protection", "Certified Technicians"]
  },
  {
    id: "samsung-galaxy-a55",
    brandId: "samsung",
    brandName: "Samsung",
    modelName: "Samsung Galaxy A55 5G",
    slug: "samsung-galaxy-a55",
    priceAnnual: 22000,
    priceMonthly: 2000,
    estimatedRetailPrice: 550000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Screen Repair & Replacement", "Liquid Damage Protection", "Back Glass Replacement", "Authorised Repair Centers"]
  },

  // Google Pixel Models
  {
    id: "google-pixel-9-pro-xl",
    brandId: "google",
    brandName: "Google",
    modelName: "Google Pixel 9 Pro XL",
    slug: "google-pixel-9-pro-xl",
    priceAnnual: 40000,
    priceMonthly: 3700,
    estimatedRetailPrice: 1600000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Super Actua Display Repair", "Liquid Spill Protection", "Glass Back Replacement", "Genuine Parts"]
  },
  {
    id: "google-pixel-9-pro",
    brandId: "google",
    brandName: "Google",
    modelName: "Google Pixel 9 Pro",
    slug: "google-pixel-9-pro",
    priceAnnual: 36000,
    priceMonthly: 3300,
    estimatedRetailPrice: 1400000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Super Actua Display Repair", "Liquid Spill Protection", "Glass Back Replacement", "Genuine Parts"]
  },
  {
    id: "google-pixel-9",
    brandId: "google",
    brandName: "Google",
    modelName: "Google Pixel 9",
    slug: "google-pixel-9",
    priceAnnual: 30000,
    priceMonthly: 2800,
    estimatedRetailPrice: 1100000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Actua Display Repair", "Liquid Spill Protection", "Rear Camera Glass Repair", "Genuine Parts"]
  },
  {
    id: "google-pixel-8a",
    brandId: "google",
    brandName: "Google",
    modelName: "Google Pixel 8a",
    slug: "google-pixel-8a",
    priceAnnual: 22000,
    priceMonthly: 2000,
    estimatedRetailPrice: 620000,
    releaseYear: 2024,
    popular: true,
    inspectionRequired: true,
    coverageHighlights: ["Display Repair", "Liquid Damage Protection", "Glass Damage Protection", "Authorised Repair Centers"]
  },
  {
    id: "google-pixel-8-pro",
    brandId: "google",
    brandName: "Google",
    modelName: "Google Pixel 8 Pro",
    slug: "google-pixel-8-pro",
    priceAnnual: 32000,
    priceMonthly: 3000,
    estimatedRetailPrice: 1150000,
    releaseYear: 2023,
    popular: false,
    inspectionRequired: true,
    coverageHighlights: ["Display Repair", "Liquid Damage Protection", "Rear Camera Glass Repair", "Authorised Repair Centers"]
  }
];
