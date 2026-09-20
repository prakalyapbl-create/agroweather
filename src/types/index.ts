export type Language = 'en' | 'ta' | 'hi';

export type PageId = 
  | 'home'
  | 'dashboard'
  | 'break_risk'
  | 'advisory'
  | 'alerts'
  | 'feedback'
  | 'data_sources'
  | 'map'
  | 'officer'
  | 'performance'
  | 'about';

export type MonsoonStatusType = 
  | 'not_started'
  | 'onset_expected'
  | 'active_monsoon'
  | 'break_likely'
  | 'break_ongoing'
  | 'rainfall_returning';

export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Very High';

export type CropType = 
  | 'Paddy'
  | 'Groundnut'
  | 'Maize'
  | 'Cotton'
  | 'Millets'
  | 'Pulses'
  | 'Sugarcane'
  | 'Vegetables';

export interface LocationInfo {
  district: string;
  block: string;
  village: string;
}

export interface CurrentWeather {
  temperature: number; // °C
  rainfall: number; // mm in last 24h
  humidity: number; // %
  soilMoisture: number; // %
  windSpeed: number; // km/h
  cloudCover: number; // %
}

export interface ForecastDay {
  day: string;
  date: string;
  probability: number; // %
  expectedRainfall: number; // mm
  tempMax: number; // °C
  tempMin: number; // °C
  soilMoisture: number; // %
  condition: string; // e.g. 'Heavy Rain', 'Moderate Rain', 'Dry Spell', 'Scattered Showers'
}

export interface FactorAttribution {
  rainfallTrend: number; // 0-100
  soilMoisture: number; // 0-100
  cloudActivity: number; // 0-100
  historicalMatch: number; // 0-100
}

export interface PredictionOutput {
  status: MonsoonStatusType;
  statusLabel: string;
  expectedOnsetDays: string;
  onsetProbability: number;
  breakProbability: number;
  breakRiskLevel: RiskLevel;
  drySpellDurationDays: string;
  possibleBreakStart: string;
  possibleRainfallReturn: string;
  rainfallReturnProbability: number;
  confidenceScore: number; // %
  confidenceLevel: 'Low' | 'Moderate' | 'High';
  explanationText: string;
  factors: FactorAttribution;
  forecast: ForecastDay[];
}

export interface AdvisoryCategory {
  title: string;
  icon: string;
  advice: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  tip: string;
}

export interface CropAdvisory {
  crop: CropType;
  sowing: AdvisoryCategory;
  irrigation: AdvisoryCategory;
  protection: AdvisoryCategory;
  fertilizer: AdvisoryCategory;
  pest: AdvisoryCategory;
  harvest: AdvisoryCategory;
}

export interface WeatherAlert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  location: string;
  date: string;
  actionRequired: string;
  read: boolean;
  category: 'onset' | 'break' | 'heavy_rain' | 'general';
}

export interface FarmerFeedbackItem {
  id: string;
  village: string;
  block: string;
  district: string;
  date: string;
  didItRain: 'Yes' | 'No' | 'Light Rain' | 'Moderate Rain' | 'Heavy Rain';
  soilCondition: 'Dry' | 'Normal' | 'Wet' | 'Waterlogged';
  comment?: string;
  hasPhoto?: boolean;
}

export interface VillageMapData {
  id: string;
  village: string;
  block: string;
  district: string;
  latitude: number;
  longitude: number;
  status: MonsoonStatusType;
  rainfallProbability: number;
  breakRisk: RiskLevel;
  soilMoisture: number;
  alertLevel: 'green' | 'yellow' | 'orange' | 'red';
  crops: CropType[];
}

export interface OfficerVillageRecord {
  id: string;
  village: string;
  block: string;
  district: string;
  status: MonsoonStatusType;
  rainfallProbability: number;
  breakRisk: RiskLevel;
  soilMoisture: number;
  alertLevel: 'green' | 'yellow' | 'orange' | 'red';
  irrigationNeeded: boolean;
  farmersCount: number;
}
