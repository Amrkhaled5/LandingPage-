export type Unit = {
  id: number;
  size: number;
  garden?: number;
  bedrooms: number;
  bathrooms: number;
  delivery: string;
  totalPrice: number;
  downPayments: { label: string; percent: number }[];
  maintenancePercent: number;
  paymentYears: number;
  interestFree: boolean;
  layout: string;
  view: string;
  floorPlanImage: string;
};

export const units: Unit[] = [
  {
    id: 1,
    size: 80,
    garden: 41,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "سنة ونص",
    totalPrice: 9700000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "عند الاستلام", percent: 20 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout:
      "ريسيبشن + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + تراس + حديقة خاصة 41م",
    view: "إطلالة على اللاجون وحمام السباحة",
    floorPlanImage: "/assets/images/floorplans/unit-1.jpg",
  },
  {
    id: 2,
    size: 87,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "فوري",
    totalPrice: 8900000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "بعد 3 شهور", percent: 20 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout: "ريسيبشن + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان",
    view: "إطلالة على اللاجون وحمام السباحة",
    floorPlanImage: "/assets/images/floorplans/unit-2.jpg",
  },
  {
    id: 3,
    size: 82,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "سنة ونص",
    totalPrice: 8400000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "عند الاستلام", percent: 20 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout:
      "ريسيبشن + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + تراس",
    view: "إطلالة على اللاجون وحمام السباحة",
    floorPlanImage: "/assets/images/floorplans/unit-3.jpg",
  },
  {
    id: 4,
    size: 123,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "فوري",
    totalPrice: 12500000,
    downPayments: [{ label: "مقدم", percent: 15 }],
    maintenancePercent: 10,
    paymentYears: 6,
    interestFree: true,
    layout:
      "ريسيبشن 2ق + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + 2 تراس",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-4.jpg",
  },
  {
    id: 5,
    size: 74,
    bedrooms: 2,
    bathrooms: 2,
    delivery: "سنة ونص",
    totalPrice: 7400000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "عند الاستلام", percent: 20 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout:
      "ريسيبشن 2ق + 2 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + تراس",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-5.jpg",
  },
  {
    id: 6,
    size: 116,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "فوري",
    totalPrice: 12000000,
    downPayments: [{ label: "مقدم", percent: 15 }],
    maintenancePercent: 10,
    paymentYears: 6,
    interestFree: true,
    layout:
      "ريسيبشن 2ق + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + تراس",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-6.jpg",
  },
  {
    id: 7,
    size: 95,
    bedrooms: 2,
    bathrooms: 2,
    delivery: "١٠ شهور",
    totalPrice: 9100000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "عند الاستلام", percent: 10 },
    ],
    maintenancePercent: 10,
    paymentYears: 6,
    interestFree: false,
    layout:
      "ريسيبشن 2ق + 2 غرف نوم (الغرفتين ماستر) + 2 حمام + مطبخ أمريكان + تراس",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-7.jpg",
  },
  {
    id: 8,
    size: 95,
    bedrooms: 2,
    bathrooms: 2,
    delivery: "١٠ شهور",
    totalPrice: 9000000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "عند الاستلام", percent: 10 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout:
      "ريسيبشن 2ق + 2 غرف نوم (الغرفتين ماستر) + 2 حمام + مطبخ أمريكان",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-8.jpg",
  },
  {
    id: 9,
    size: 95,
    garden: 39,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "٣ سنوات",
    totalPrice: 11000000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "بعد 7 شهور", percent: 5 },
      { label: "بعد 3 سنوات", percent: 20 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout:
      "ريسيبشن 3ق + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + 2 تراس + حديقة خاصة 39م",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-9.jpg",
  },
  {
    id: 10,
    size: 95,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "٣ سنوات",
    totalPrice: 9500000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "بعد 7 شهور", percent: 5 },
      { label: "بعد 3 سنوات", percent: 20 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout:
      "ريسيبشن 3ق + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + 2 تراس",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-10.jpg",
  },
  {
    id: 11,
    size: 80,
    bedrooms: 2,
    bathrooms: 3,
    delivery: "٣ سنوات",
    totalPrice: 8500000,
    downPayments: [
      { label: "مقدم", percent: 5 },
      { label: "بعد 7 شهور", percent: 5 },
      { label: "بعد 3 سنوات", percent: 20 },
    ],
    maintenancePercent: 10,
    paymentYears: 7,
    interestFree: false,
    layout:
      "ريسيبشن 2ق + 2 غرف نوم (الغرفتين ماستر) + 3 حمام + مطبخ أمريكان + 2 تراس",
    view: "إطلالة على اللاجون",
    floorPlanImage: "/assets/images/floorplans/unit-11.jpg",
  },
  {
    id: 12,
    size: 128,
    bedrooms: 3,
    bathrooms: 2,
    delivery: "فوري",
    totalPrice: 13500000,
    downPayments: [{ label: "مقدم", percent: 15 }],
    maintenancePercent: 10,
    paymentYears: 6,
    interestFree: true,
    layout:
      "ريسيبشن 2ق + 3 غرف نوم (غرفة ماستر) + 2 حمام + مطبخ أمريكان + تراس",
    view: "إطلالة على البحيرات وحمام السباحة",
    floorPlanImage: "/assets/images/floorplans/unit-12.jpg",
  },
];
