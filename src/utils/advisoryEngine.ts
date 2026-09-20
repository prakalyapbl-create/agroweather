import type { CropType, MonsoonStatusType, CropAdvisory } from '../types';

export function getCropAdvisory(crop: CropType, status: MonsoonStatusType): CropAdvisory {
  const isOnsetExpected = status === 'onset_expected';
  const isActive = status === 'active_monsoon';
  const isBreak = status === 'break_likely' || status === 'break_ongoing';
  const isReturn = status === 'rainfall_returning';

  switch (crop) {
    case 'Paddy':
      return {
        crop: 'Paddy',
        sowing: {
          title: 'Sowing & Nursery Preparation',
          icon: 'Sprout',
          advice: isOnsetExpected
            ? 'Rainfall is likely to increase within 3–5 days. Prepare nursery beds and start pre-soaking seeds for transplanting.'
            : isBreak
            ? 'Delay direct seeding until soil moisture recovers. Keep nursery beds moist using micro-irrigation or farm pond water.'
            : 'Optimal moisture available for transplanting 20–25 day old paddy seedlings into puddled fields.',
          priority: isOnsetExpected ? 'high' : 'medium',
          tip: 'Use short to medium-duration Samba paddy varieties if onset delay exceeds 10 days.',
        },
        irrigation: {
          title: 'Irrigation & Water Management',
          icon: 'Droplets',
          advice: isOnsetExpected || isActive
            ? 'Rainfall probability is high over the next 48 hours. Conserve pump fuel and postpone artificial canal/borewell irrigation.'
            : 'Prolonged dry spell expected. Maintain 2–3 cm shallow standing water during tillering stage to avoid yield drop.',
          priority: isBreak ? 'urgent' : 'low',
          tip: 'Ensure field bunds are strengthened to trap maximum rainfall.',
        },
        protection: {
          title: 'Crop Protection & Drainage',
          icon: 'ShieldAlert',
          advice: isActive
            ? 'Clear main drainage channels immediately. Heavy rain clusters can submerged young transplants.'
            : 'Keep plot outlets open slightly to avoid water stagnation during sudden downpours.',
          priority: isActive ? 'urgent' : 'medium',
          tip: 'Drain excess water 2 days after heavy rainfall to improve root aeration.',
        },
        fertilizer: {
          title: 'Fertilizer Application',
          icon: 'FlaskConical',
          advice: isOnsetExpected || isActive
            ? 'Avoid applying urea or top-dressing fertilizers immediately before heavy rain to prevent nutrient runoff.'
            : 'Apply split dose of nitrogen (Urea) with neem coating during mild moist soil condition.',
          priority: isOnsetExpected ? 'high' : 'medium',
          tip: 'Apply fertilizer in early morning when dew has dried off.',
        },
        pest: {
          title: 'Pest & Disease Management',
          icon: 'Bug',
          advice: isActive || isReturn
            ? 'High humidity (>85%) increases leaf blast and sheath blight risks. Inspect seedling leaves for diamond spots.'
            : 'Monitor for stem borer and gall midge during early vegetative growth.',
          priority: isActive ? 'high' : 'low',
          tip: 'Spray Pseudomonas fluorescens @ 10g/litre as bio-preventive.',
        },
        harvest: {
          title: 'Harvesting & Drying',
          icon: 'Wheat',
          advice: isActive
            ? 'Postpone harvesting mature crops during active rain. Delay threshing and store harvested sheaves under tarpaulin.'
            : 'Clear threshing floors and check moisture content before bagging.',
          priority: 'medium',
          tip: 'Target 14% grain moisture before grain storage.',
        },
      };

    case 'Groundnut':
      return {
        crop: 'Groundnut',
        sowing: {
          title: 'Sowing Moisture Window',
          icon: 'Sprout',
          advice: isOnsetExpected
            ? 'Wait for the first soaking rain (30–40mm) before sowing groundnut to ensure uniform germination.'
            : isBreak
            ? 'Do not sow groundnut in dry soil without life irrigation support.'
            : 'Sow groundnut seeds immediately as current soil moisture level is ideal (65–70%).',
          priority: isOnsetExpected ? 'urgent' : 'medium',
          tip: 'Treat seeds with Trichoderma viride @ 4g/kg to prevent root rot.',
        },
        irrigation: {
          title: 'Irrigation Management',
          icon: 'Droplets',
          advice: isBreak
            ? 'Critical peg initiation stage: Provide sprinkler irrigation (20mm) if dry spell exceeds 5 days.'
            : 'Avoid irrigation post-heavy rainfall; groundnut crops are susceptible to root suffocation.',
          priority: isBreak ? 'urgent' : 'low',
          tip: 'Gypsum application at 40-45 DAP improves pod filling during rain gaps.',
        },
        protection: {
          title: 'Field Drainage & Soil Care',
          icon: 'ShieldAlert',
          advice: isActive
            ? 'Prevent standing water in groundnut plots. Construct ridge and furrow drains.'
            : 'Ensure loose soil texture for easy peg penetration into soil.',
          priority: isActive ? 'high' : 'low',
          tip: 'Earthing up should be completed within 35 days after sowing.',
        },
        fertilizer: {
          title: 'Nutrient Management',
          icon: 'FlaskConical',
          advice: 'Apply basal dose of NPK (25:50:75 kg/ha) at sowing time along with 200 kg gypsum per hectare.',
          priority: 'medium',
          tip: 'Avoid excessive nitrogen which causes excessive foliage growth over pod formation.',
        },
        pest: {
          title: 'Pest & Disease Warning',
          icon: 'Bug',
          advice: isReturn || isActive
            ? 'Humid warm spell after rain encourages Tikka leaf spot and Rust diseases. Monitor lower leaves.'
            : 'Check field edges for leaf miner and red hairy caterpillar egg masses.',
          priority: isReturn ? 'high' : 'medium',
          tip: 'Spray Mancozeb @ 2g/L if brown spots appear on leaves.',
        },
        harvest: {
          title: 'Pod Harvesting',
          icon: 'Wheat',
          advice: isBreak
            ? 'Ideal dry ground conditions for digging out groundnut pods. Ensure quick drying.'
            : 'Avoid digging pods from soaking wet soil to prevent pod shedding.',
          priority: 'medium',
          tip: 'Dry pods in sun for 3-4 days until pods make a rattling sound when shaken.',
        },
      };

    case 'Millets':
    case 'Pulses':
      return {
        crop,
        sowing: {
          title: 'Sowing Window',
          icon: 'Sprout',
          advice: isOnsetExpected
            ? 'Prepare seedbed for dryland sowing. Millets/pulses require minimum moisture to establish roots.'
            : 'Ideal time for dry sowing preceding monsoon showers.',
          priority: 'high',
          tip: 'Use seed hardening technique with 1% KCl before sowing.',
        },
        irrigation: {
          title: 'Dry Spell Resiliency',
          icon: 'Droplets',
          advice: isBreak
            ? 'Millets are drought-tolerant. One protective irrigation at flowering stage will boost grain yield.'
            : 'No artificial irrigation required under normal monsoon shower intervals.',
          priority: isBreak ? 'medium' : 'low',
          tip: 'Foliar spray of 1% potassium nitrate helps crops withstand moisture stress.',
        },
        protection: {
          title: 'Weed & Soil Cover',
          icon: 'ShieldAlert',
          advice: 'Perform inter-cultivation weeding 20 days post-sowing to preserve soil moisture.',
          priority: 'medium',
          tip: 'Mulching with farm crop residue reduces surface evaporation.',
        },
        fertilizer: {
          title: 'Micro-Nutrient Advice',
          icon: 'FlaskConical',
          advice: 'Apply bio-fertilizer Rhizobium / Azospirillum seed treatment before sowing.',
          priority: 'medium',
          tip: 'Foliar spray of pulse wonder @ 2kg/acre at peak flowering.',
        },
        pest: {
          title: 'Shoot Fly & Pod Borer Watch',
          icon: 'Bug',
          advice: 'Monitor sorghum/millet shoot fly within first 3 weeks of seedling emergence.',
          priority: 'high',
          tip: 'Set up yellow sticky traps @ 12 per acre.',
        },
        harvest: {
          title: 'Harvest Timing',
          icon: 'Wheat',
          advice: 'Harvest earheads when grains reach hard dough stage during dry periods.',
          priority: 'medium',
          tip: 'Store grains in Purdue Improved Crop Storage (PICS) bags.',
        },
      };

    default:
      return {
        crop,
        sowing: {
          title: 'Sowing & Field Prep',
          icon: 'Sprout',
          advice: isOnsetExpected
            ? `Monsoon onset expected in 3–5 days. Complete ridge and furrow layout for ${crop}.`
            : `Favorable soil moisture conditions for ${crop} field operations.`,
          priority: 'high',
          tip: 'Ensure high quality certified seeds from authorized FPO centers.',
        },
        irrigation: {
          title: 'Irrigation Schedule',
          icon: 'Droplets',
          advice: isBreak
            ? 'Dry spell predicted. Provide drip or furrow irrigation to prevent flower drop and wilt.'
            : 'Sufficient soil moisture present. Suspend canal water pumping.',
          priority: isBreak ? 'high' : 'low',
          tip: 'Adopt alternate furrow irrigation to save 30% water.',
        },
        protection: {
          title: 'Drainage & Crop Health',
          icon: 'ShieldAlert',
          advice: isActive
            ? 'Clear drainage channels. Root systems must not remain submerged for over 24 hours.'
            : 'Keep field borders free of weeds to minimize vector shelter.',
          priority: isActive ? 'urgent' : 'medium',
          tip: 'Construct field bunds across slope direction.',
        },
        fertilizer: {
          title: 'Nutrient Timing',
          icon: 'FlaskConical',
          advice: isOnsetExpected || isActive
            ? 'Defer granular fertilizer application until rain subsides to avoid leaching loss.'
            : 'Apply recommended split dose near crop root zone.',
          priority: 'medium',
          tip: 'Incorporate neem cake to improve nitrogen utilization.',
        },
        pest: {
          title: 'Pest Alert',
          icon: 'Bug',
          advice: isActive
            ? 'High atmospheric humidity promotes fungal spot and sucking pest outbreaks.'
            : 'Install pheromone traps to monitor pest population thresholds.',
          priority: 'high',
          tip: 'Inspect lower leaf surfaces twice weekly.',
        },
        harvest: {
          title: 'Harvest & Marketing',
          icon: 'Wheat',
          advice: 'Plan picking/harvesting on dry clear days. Prevent rain contact on harvested produce.',
          priority: 'medium',
          tip: 'Keep harvested produce elevated above ground level.',
        },
      };
  }
}
