import type { CropType, WeatherAlert, FarmerFeedbackItem, VillageMapData, OfficerVillageRecord } from '../types';

export const DISTRICT_BLOCK_MAP: Record<string, Record<string, string[]>> = {
  'Thanjavur': {
    'Orathanadu': ['Sample Village', 'Orathanadu East', 'Vadaseri', 'Okkanadu Keelaiyur', 'Kannanthankudi'],
    'Pattukkottai': ['Alathur', 'Adirampattinam Rural', 'Tamarankottai', 'Mallipattinam'],
    'Thiruvaiyaru': ['Kandiyur', 'Tiruchatturai', 'Tirupanthuruthi', 'Tiruvaiyaru Town'],
    'Kumbakonam': ['Darashuram', 'Swamimalai', 'Tiruvalanjuli', 'Sakkottai']
  },
  'Madurai': {
    'Melur': ['Arittapatti', 'Therku Theru', 'Kottampatti', 'Vellalur'],
    'Vadipatti': ['Sholavandan', 'Alanganallur', 'Palamedu', 'Kullapuram'],
    'Tirumangalam': ['Kalligudi', 'Checkanurani', 'T.Kallupatti', 'Karumathur']
  },
  'Coimbatore': {
    'Pollachi South': ['Anaimalai', 'Zamin Uthukuli', 'Marchinaickenpalayam', 'Samathur'],
    'Kinathukadavu': ['Kollarpatti', 'Singalandampalayam', 'Vadachittor', 'Arasampalayam'],
    'Thondamuthur': ['Vellimalaipattinam', 'Narasipuram', 'Mathivarayam', 'Ikkarai Boluvampatti']
  },
  'Tiruchirappalli': {
    'Lalgudi': ['Anbil', 'Poovalur', 'Jangamarajapuram', 'Mandurai'],
    'Musiri': ['Thottiyam', 'Kattuputhur', 'Appananallur', 'Moovanur']
  },
  'Salem': {
    'Attur': ['Mulliruppu', 'Kottavadi', 'Manjini', 'Thandarayanapuram'],
    'Mettur': ['Mecheri', 'Palamalai', 'Kavandapadi', 'Kolathur']
  }
};

export const ALL_CROPS: CropType[] = [
  'Paddy',
  'Groundnut',
  'Maize',
  'Cotton',
  'Millets',
  'Pulses',
  'Sugarcane',
  'Vegetables'
];

export const INITIAL_ALERTS: WeatherAlert[] = [
  {
    id: 'alt-001',
    title: 'Monsoon Onset Alert',
    description: 'Atmospheric and satellite indicators suggest monsoon onset within 3–5 days in Orathanadu Block. Sowing moisture buildup expected.',
    severity: 'high',
    location: 'Orathanadu Block, Thanjavur',
    date: '19 Sep 2026',
    actionRequired: 'Prepare fields for sowing. Delay pre-sowing dry irrigation.',
    read: false,
    category: 'onset'
  },
  {
    id: 'alt-002',
    title: 'Dry Spell Alert (Break Risk)',
    description: 'A 4–6 day rainfall gap is predicted starting around Day 20 post-onset. Soil moisture levels may dip by 18-22%.',
    severity: 'moderate',
    location: 'Sample Village, Orathanadu',
    date: '18 Sep 2026',
    actionRequired: 'Plan alternate canal water allocation or micro-irrigation for young crops.',
    read: false,
    category: 'break'
  },
  {
    id: 'alt-003',
    title: 'Heavy Rainfall Warning',
    description: 'Convective cloud build-up expected on Day 4 with rainfall up to 45mm/hr in localized clusters.',
    severity: 'critical',
    location: 'Thanjavur Coastal Belt',
    date: '17 Sep 2026',
    actionRequired: 'Clear field drainage channels to prevent waterlogging in nursery beds.',
    read: true,
    category: 'heavy_rain'
  }
];

export const INITIAL_FEEDBACK: FarmerFeedbackItem[] = [
  {
    id: 'fb-101',
    village: 'Sample Village',
    block: 'Orathanadu',
    district: 'Thanjavur',
    date: '19 Sep 2026',
    didItRain: 'Moderate Rain',
    soilCondition: 'Wet',
    comment: 'Rain started around 3 PM today. Top soil is damp enough for paddy field ploughing.',
    hasPhoto: true
  },
  {
    id: 'fb-102',
    village: 'Orathanadu East',
    block: 'Orathanadu',
    district: 'Thanjavur',
    date: '18 Sep 2026',
    didItRain: 'Light Rain',
    soilCondition: 'Normal',
    comment: 'Drizzle for 20 mins. Need more rainfall before sowing groundnut.',
    hasPhoto: false
  },
  {
    id: 'fb-103',
    village: 'Vadaseri',
    block: 'Orathanadu',
    district: 'Thanjavur',
    date: '18 Sep 2026',
    didItRain: 'Heavy Rain',
    soilCondition: 'Waterlogged',
    comment: 'Thunderstorm with high winds. Water accumulated in low lying sugarcane plots.',
    hasPhoto: true
  },
  {
    id: 'fb-104',
    village: 'Alathur',
    block: 'Pattukkottai',
    district: 'Thanjavur',
    date: '17 Sep 2026',
    didItRain: 'No',
    soilCondition: 'Dry',
    comment: 'Dry sunny weather all day. Borewell water used for nursery watering.',
    hasPhoto: false
  }
];

export const VILLAGE_MAP_POINTS: VillageMapData[] = [
  {
    id: 'vmap-1',
    village: 'Sample Village',
    block: 'Orathanadu',
    district: 'Thanjavur',
    latitude: 10.6264,
    longitude: 79.2530,
    status: 'onset_expected',
    rainfallProbability: 78,
    breakRisk: 'Moderate',
    soilMoisture: 64,
    alertLevel: 'yellow',
    crops: ['Paddy', 'Groundnut', 'Pulses']
  },
  {
    id: 'vmap-2',
    village: 'Orathanadu East',
    block: 'Orathanadu',
    district: 'Thanjavur',
    latitude: 10.6300,
    longitude: 79.2650,
    status: 'onset_expected',
    rainfallProbability: 82,
    breakRisk: 'Low',
    soilMoisture: 70,
    alertLevel: 'green',
    crops: ['Paddy', 'Sugarcane']
  },
  {
    id: 'vmap-3',
    village: 'Vadaseri',
    block: 'Orathanadu',
    district: 'Thanjavur',
    latitude: 10.6120,
    longitude: 79.2410,
    status: 'break_likely',
    rainfallProbability: 35,
    breakRisk: 'High',
    soilMoisture: 42,
    alertLevel: 'orange',
    crops: ['Groundnut', 'Millets', 'Cotton']
  },
  {
    id: 'vmap-4',
    village: 'Okkanadu Keelaiyur',
    block: 'Orathanadu',
    district: 'Thanjavur',
    latitude: 10.6450,
    longitude: 79.2800,
    status: 'active_monsoon',
    rainfallProbability: 91,
    breakRisk: 'Low',
    soilMoisture: 84,
    alertLevel: 'green',
    crops: ['Paddy', 'Vegetables']
  },
  {
    id: 'vmap-5',
    village: 'Kannanthankudi',
    block: 'Orathanadu',
    district: 'Thanjavur',
    latitude: 10.6010,
    longitude: 79.2200,
    status: 'break_ongoing',
    rainfallProbability: 18,
    breakRisk: 'Very High',
    soilMoisture: 28,
    alertLevel: 'red',
    crops: ['Millets', 'Pulses']
  },
  {
    id: 'vmap-6',
    village: 'Alathur',
    block: 'Pattukkottai',
    district: 'Thanjavur',
    latitude: 10.4230,
    longitude: 79.3180,
    status: 'rainfall_returning',
    rainfallProbability: 68,
    breakRisk: 'Moderate',
    soilMoisture: 52,
    alertLevel: 'yellow',
    crops: ['Paddy', 'Groundnut']
  },
  {
    id: 'vmap-7',
    village: 'Adirampattinam Rural',
    block: 'Pattukkottai',
    district: 'Thanjavur',
    latitude: 10.3400,
    longitude: 79.3800,
    status: 'active_monsoon',
    rainfallProbability: 88,
    breakRisk: 'Low',
    soilMoisture: 78,
    alertLevel: 'green',
    crops: ['Paddy', 'Groundnut', 'Vegetables']
  },
  {
    id: 'vmap-8',
    village: 'Kandiyur',
    block: 'Thiruvaiyaru',
    district: 'Thanjavur',
    latitude: 10.8600,
    longitude: 79.1100,
    status: 'onset_expected',
    rainfallProbability: 74,
    breakRisk: 'Moderate',
    soilMoisture: 58,
    alertLevel: 'yellow',
    crops: ['Paddy', 'Sugarcane']
  }
];

export const OFFICER_VILLAGE_RECORDS: OfficerVillageRecord[] = [
  {
    id: 'off-1',
    village: 'Sample Village',
    block: 'Orathanadu',
    district: 'Thanjavur',
    status: 'onset_expected',
    rainfallProbability: 78,
    breakRisk: 'Moderate',
    soilMoisture: 64,
    alertLevel: 'yellow',
    irrigationNeeded: false,
    farmersCount: 420
  },
  {
    id: 'off-2',
    village: 'Orathanadu East',
    block: 'Orathanadu',
    district: 'Thanjavur',
    status: 'onset_expected',
    rainfallProbability: 82,
    breakRisk: 'Low',
    soilMoisture: 70,
    alertLevel: 'green',
    irrigationNeeded: false,
    farmersCount: 560
  },
  {
    id: 'off-3',
    village: 'Vadaseri',
    block: 'Orathanadu',
    district: 'Thanjavur',
    status: 'break_likely',
    rainfallProbability: 35,
    breakRisk: 'High',
    soilMoisture: 42,
    alertLevel: 'orange',
    irrigationNeeded: true,
    farmersCount: 380
  },
  {
    id: 'off-4',
    village: 'Okkanadu Keelaiyur',
    block: 'Orathanadu',
    district: 'Thanjavur',
    status: 'active_monsoon',
    rainfallProbability: 91,
    breakRisk: 'Low',
    soilMoisture: 84,
    alertLevel: 'green',
    irrigationNeeded: false,
    farmersCount: 610
  },
  {
    id: 'off-5',
    village: 'Kannanthankudi',
    block: 'Orathanadu',
    district: 'Thanjavur',
    status: 'break_ongoing',
    rainfallProbability: 18,
    breakRisk: 'Very High',
    soilMoisture: 28,
    alertLevel: 'red',
    irrigationNeeded: true,
    farmersCount: 290
  },
  {
    id: 'off-6',
    village: 'Alathur',
    block: 'Pattukkottai',
    district: 'Thanjavur',
    status: 'rainfall_returning',
    rainfallProbability: 68,
    breakRisk: 'Moderate',
    soilMoisture: 52,
    alertLevel: 'yellow',
    irrigationNeeded: false,
    farmersCount: 490
  },
  {
    id: 'off-7',
    village: 'Arittapatti',
    block: 'Melur',
    district: 'Madurai',
    status: 'break_likely',
    rainfallProbability: 25,
    breakRisk: 'High',
    soilMoisture: 36,
    alertLevel: 'orange',
    irrigationNeeded: true,
    farmersCount: 310
  },
  {
    id: 'off-8',
    village: 'Anaimalai',
    block: 'Pollachi South',
    district: 'Coimbatore',
    status: 'active_monsoon',
    rainfallProbability: 95,
    breakRisk: 'Low',
    soilMoisture: 89,
    alertLevel: 'green',
    irrigationNeeded: false,
    farmersCount: 750
  }
];

export const VALIDATION_METRICS = {
  onsetAccuracy: 88.4,
  breakAccuracy: 84.2,
  maeRainfall: '3.2 mm',
  alertPrecision: 91.0,
  dataCoverage: '98.5%',
  totalVillagesMonitored: 412,
  historicalYearsTrained: 25,

  rainfallComparison: [
    { day: 'Day 1', predicted: 12, observed: 10 },
    { day: 'Day 2', predicted: 22, observed: 25 },
    { day: 'Day 3', predicted: 45, observed: 42 },
    { day: 'Day 4', predicted: 58, observed: 61 },
    { day: 'Day 5', predicted: 50, observed: 46 },
    { day: 'Day 6', predicted: 20, observed: 18 },
    { day: 'Day 7', predicted: 8, observed: 12 }
  ],

  onsetComparison: [
    { year: '2021', predictedDay: 'Jun 04', observedDay: 'Jun 05', deviationDays: 1 },
    { year: '2022', predictedDay: 'Jun 08', observedDay: 'Jun 07', deviationDays: -1 },
    { year: '2023', predictedDay: 'Jun 02', observedDay: 'Jun 02', deviationDays: 0 },
    { year: '2024', predictedDay: 'Jun 11', observedDay: 'Jun 12', deviationDays: 1 },
    { year: '2025', predictedDay: 'Jun 06', observedDay: 'Jun 05', deviationDays: -1 }
  ]
};
