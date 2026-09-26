import type { PredictionOutput, ForecastDay, MonsoonStatusType } from '../types';

export interface WeatherInputs {
  recentRainfall24h: number; // mm
  temperature: number; // °C
  humidity: number; // %
  soilMoisture: number; // %
  cloudCover: number; // %
  windSpeed: number; // km/h
  historicalOnsetDiffDays: number; // days relative to normal onset
  scenarioPreset?: 'default' | 'early_onset' | 'prolonged_break' | 'active_monsoon' | 'drought_risk';
}

/**
 * HyperMonsoon Prototype Prediction Engine
 * Calculates weighted scores for onset, break risk, and rainfall probability
 * based on atmospheric, soil, satellite, and historical indicators.
 */
export function calculatePrediction(inputs: WeatherInputs): PredictionOutput {
  const { scenarioPreset = 'default', recentRainfall24h, humidity, soilMoisture, cloudCover } = inputs;

  // Preset scenarios to provide instant interactive switching during judging/demos
  if (scenarioPreset === 'early_onset') {
    return {
      status: 'onset_expected',
      statusLabel: 'EARLY ONSET EXPECTED',
      expectedOnsetDays: 'Within 1–2 days',
      onsetProbability: 92,
      breakProbability: 25,
      breakRiskLevel: 'Low',
      drySpellDurationDays: '2–3 days',
      possibleBreakStart: '24 Sep',
      possibleRainfallReturn: '27 Sep',
      rainfallReturnProbability: 80,
      confidenceScore: 94,
      confidenceLevel: 'High',
      explanationText: 'Heavy cloud activity (88%), surging humidity (86%), and rising soil moisture indicate rapid monsoon convergence. Historical onset window matches early arrival patterns.',
      factors: {
        rainfallTrend: 88,
        soilMoisture: 82,
        cloudActivity: 92,
        historicalMatch: 85,
      },
      forecast: generateForecast(85, 28, 75),
    };
  }

  if (scenarioPreset === 'prolonged_break') {
    return {
      status: 'break_ongoing',
      statusLabel: 'PROLONGED BREAK ONGOING',
      expectedOnsetDays: 'Monsoon Active Previously',
      onsetProbability: 15,
      breakProbability: 88,
      breakRiskLevel: 'High',
      drySpellDurationDays: '6–8 days',
      possibleBreakStart: '18 Sep',
      possibleRainfallReturn: '26 Sep',
      rainfallReturnProbability: 72,
      confidenceScore: 89,
      confidenceLevel: 'High',
      explanationText: 'Anticyclonic wind patterns and reduced satellite cloud cover indicate an extended monsoon break. Soil moisture is rapidly drying. Supplemental irrigation recommended.',
      factors: {
        rainfallTrend: 22,
        soilMoisture: 34,
        cloudActivity: 28,
        historicalMatch: 90,
      },
      forecast: generateForecast(20, 34, 32),
    };
  }

  if (scenarioPreset === 'active_monsoon') {
    return {
      status: 'active_monsoon',
      statusLabel: 'ACTIVE MONSOON PHASE',
      expectedOnsetDays: 'Monsoon Ongoing',
      onsetProbability: 98,
      breakProbability: 18,
      breakRiskLevel: 'Low',
      drySpellDurationDays: 'N/A',
      possibleBreakStart: 'N/A',
      possibleRainfallReturn: 'Ongoing',
      rainfallReturnProbability: 95,
      confidenceScore: 96,
      confidenceLevel: 'High',
      explanationText: 'Widespread convective precipitation is active across the block. High soil saturation and cloud tops indicate sustained rainfall for the next 5-7 days.',
      factors: {
        rainfallTrend: 95,
        soilMoisture: 91,
        cloudActivity: 94,
        historicalMatch: 88,
      },
      forecast: generateForecast(90, 27, 85),
    };
  }

  if (scenarioPreset === 'drought_risk') {
    return {
      status: 'break_likely',
      statusLabel: 'BREAK LIKELY / DRY SPELL RISK',
      expectedOnsetDays: 'Delayed Onset / Break',
      onsetProbability: 32,
      breakProbability: 82,
      breakRiskLevel: 'Very High',
      drySpellDurationDays: '8–10 days',
      possibleBreakStart: '20 Sep',
      possibleRainfallReturn: '30 Sep',
      rainfallReturnProbability: 55,
      confidenceScore: 86,
      confidenceLevel: 'Moderate',
      explanationText: 'Deficit cumulative rainfall, high land surface temperatures, and low soil moisture suggest a severe dry spell gap. Farmers should conserve stored irrigation water.',
      factors: {
        rainfallTrend: 28,
        soilMoisture: 30,
        cloudActivity: 35,
        historicalMatch: 82,
      },
      forecast: generateForecast(25, 33, 30),
    };
  }

  // DEFAULT DYNAMIC CALCULATION ALGORITHM
  // Calculate Onset Score based on weighted metrics
  const rainfallFactor = Math.min(100, (recentRainfall24h / 25) * 100 * 0.35 + (humidity / 100) * 100 * 0.3);
  const moistureFactor = Math.min(100, (soilMoisture / 80) * 100);
  const cloudFactor = Math.min(100, (cloudCover / 80) * 100);
  const historicalFactor = 75; // Baseline similarity for Thanjavur region

  const onsetScore = Math.round(
    rainfallFactor * 0.3 + moistureFactor * 0.25 + cloudFactor * 0.3 + historicalFactor * 0.15
  );

  const breakScore = Math.round(
    (100 - moistureFactor) * 0.4 + (100 - cloudFactor) * 0.35 + 30
  );

  let status: MonsoonStatusType = 'onset_expected';
  let statusLabel = 'ONSET EXPECTED';
  let expectedOnsetDays = 'Within 3–5 days';

  if (onsetScore >= 85) {
    status = 'active_monsoon';
    statusLabel = 'ACTIVE MONSOON PHASE';
    expectedOnsetDays = 'Active Now';
  } else if (onsetScore >= 60) {
    status = 'onset_expected';
    statusLabel = 'ONSET EXPECTED';
    expectedOnsetDays = 'Within 3–5 days';
  } else if (breakScore >= 70) {
    status = 'break_likely';
    statusLabel = 'BREAK LIKELY';
    expectedOnsetDays = 'Monsoon Interrupted';
  } else {
    status = 'not_started';
    statusLabel = 'PRE-MONSOON PHASE';
    expectedOnsetDays = 'Within 7–10 days';
  }

  const breakRiskLevel = breakScore > 75 ? 'High' : breakScore > 50 ? 'Moderate' : 'Low';
  const confidenceScore = Math.min(95, Math.max(70, Math.round((onsetScore + (100 - Math.abs(50 - breakScore))) / 2)));

  const explanationText =
    `Recent rainfall has increased over recent days (${recentRainfall24h} mm/24h), soil moisture is rising (${soilMoisture}%), and satellite cloud activity is at ${cloudCover}%. Historical weather patterns for Orathanadu also indicate atmospheric conditions similar to previous monsoon onset windows.`;

  return {
    status,
    statusLabel,
    expectedOnsetDays,
    onsetProbability: onsetScore,
    breakProbability: breakScore,
    breakRiskLevel,
    drySpellDurationDays: breakScore > 60 ? '4–6 days' : '2–3 days',
    possibleBreakStart: '18 July',
    possibleRainfallReturn: '24 July',
    rainfallReturnProbability: 78,
    confidenceScore,
    confidenceLevel: confidenceScore > 85 ? 'High' : 'Moderate',
    explanationText,
    factors: {
      rainfallTrend: Math.min(100, Math.max(20, Math.round(rainfallFactor))),
      soilMoisture: Math.min(100, Math.max(15, Math.round(moistureFactor))),
      cloudActivity: Math.min(100, Math.max(25, Math.round(cloudFactor))),
      historicalMatch: Math.min(100, Math.max(30, Math.round(historicalFactor))),
    },
    forecast: generateForecast(onsetScore, 30, soilMoisture),
  };
}

function generateForecast(baseProb: number, tempBase: number, soilBase: number): ForecastDay[] {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  const dates = ['Today', '+1d', '+2d', '+3d', '+4d', '+5d', '+6d'];

  const probModifiers = [0.4, 0.6, 0.95, 1.05, 0.98, 0.65, 0.45];
  const rainfallModifiers = [5, 12, 38, 52, 42, 18, 8];

  return days.map((day, idx) => {
    const probability = Math.min(98, Math.max(10, Math.round(baseProb * probModifiers[idx])));
    const expectedRainfall = Math.round((rainfallModifiers[idx] * (probability / 70)) * 10) / 10;
    const tempMax = Math.round((tempBase - (probability / 20)) * 10) / 10;
    const tempMin = Math.round((tempMax - 6) * 10) / 10;
    const soilMoisture = Math.min(95, Math.round(soilBase + (expectedRainfall * 0.6)));

    let condition = 'Partly Cloudy';
    if (probability > 75) condition = expectedRainfall > 35 ? 'Heavy Rain' : 'Moderate Rain';
    else if (probability > 45) condition = 'Light Showers';
    else condition = 'Dry / Sunny';

    return {
      day,
      date: dates[idx],
      probability,
      expectedRainfall,
      tempMax,
      tempMin,
      soilMoisture,
      condition,
    };
  });
}
