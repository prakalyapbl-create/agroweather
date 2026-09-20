import type { Language } from '../types';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Brand
    brandTitle: 'HyperMonsoon',
    brandSubtitle: 'Hyperlocal Monsoon Intelligence for Every Village',
    heroDesc: 'Predict monsoon onset and breaks at Block/Village scale and turn weather intelligence into actionable decisions for farmers.',
    predict: 'Predict',
    plan: 'Plan',
    protect: 'Protect',
    exploreDashboard: 'Explore Dashboard',
    viewAdvisory: 'View Farmer Advisory',
    howItWorks: 'How It Works',
    runDemo: 'Run Prediction Demo',

    // Navigation
    navHome: 'Home',
    navDashboard: 'Farmer Dashboard',
    navBreak: 'Monsoon Break Risk',
    navAdvisory: 'Crop Advisory',
    navAlerts: 'Weather Alerts',
    navFeedback: 'Report Rainfall',
    navDataSources: 'Data Sources',
    navMap: 'Village Map',
    navOfficer: 'Officer Dashboard',
    navPerformance: 'Model Performance',
    navAbout: 'About Project',

    // Location Selector
    district: 'District',
    block: 'Block',
    village: 'Village',
    selectedLocation: 'Current Monitored Village',

    // Current Weather
    currentWeather: 'Current Village Weather',
    temperature: 'Temperature',
    rainfall: 'Rainfall (24h)',
    humidity: 'Humidity',
    soilMoisture: 'Soil Moisture',
    windSpeed: 'Wind Speed',

    // Monsoon Status
    monsoonStatus: 'Monsoon Status',
    expectedOnset: 'Expected Onset',
    rainfallProbability: 'Rainfall Probability',
    confidence: 'Model Confidence',
    onset_expected: 'ONSET EXPECTED',
    active_monsoon: 'ACTIVE MONSOON',
    break_likely: 'BREAK LIKELY',
    break_ongoing: 'BREAK ONGOING',
    rainfall_returning: 'RAINFALL RETURNING',
    not_started: 'PRE-MONSOON PHASE',

    // Timeline
    timelineTitle: 'Monsoon Journey Timeline',
    preMonsoon: 'Pre-Monsoon',
    likelyOnset: 'Likely Onset',
    activeRainfall: 'Active Rainfall',
    possibleBreak: 'Possible Break',
    rainfallReturn: 'Rainfall Return',

    // Chart Toggles
    chartTitle: '7-Day Village Weather Forecast',
    probToggle: 'Rainfall Prob (%)',
    rainToggle: 'Expected Rain (mm)',
    tempToggle: 'Temperature (°C)',
    soilToggle: 'Soil Moisture (%)',

    // Monsoon Break Section
    breakTitle: 'Monsoon Break Risk',
    breakRisk: 'Break Risk Level',
    expectedDryPeriod: 'Expected Dry Period',
    possibleStart: 'Possible Break Start',
    possibleReturn: 'Possible Return',
    breakDesc: 'Current atmospheric and rainfall indicators suggest a possible prolonged dry spell. Farmers should monitor soil moisture and plan supplemental irrigation where available.',

    // Explainable AI
    whyPredicting: 'Why are we predicting this?',
    rainfallTrend: 'Rainfall Trend',
    cloudActivity: 'Cloud & Satellite',
    historicalMatch: 'Historical Pattern',

    // Advisory
    advisoryTitle: 'What Should I Do?',
    selectCrop: 'Select Your Crop',
    sowing: 'Sowing & Field Prep',
    irrigation: 'Irrigation',
    cropProtection: 'Crop Protection',
    fertilizer: 'Fertilizer',
    pest: 'Pest & Disease',
    harvest: 'Harvest & Water Management',

    // Feedback
    feedbackTitle: 'Report What You See (Ground Truth)',
    didItRainToday: 'Did it rain in your field today?',
    soilCondition: 'Soil Condition',
    submitFeedback: 'Submit Observation',
    feedbackSuccess: 'Thank you! Your observation helps improve local predictions.',
    pastObservations: 'Recent Community Observations',

    // Alerts
    weatherAlerts: 'Weather Alert Center',
    markRead: 'Mark as Read',
    viewAdvisoryAction: 'View Crop Advisory',

    // Disclaimers
    disclaimer: 'HyperMonsoon is a prototype decision-support system for demonstration. Predictions are experimental and should be used alongside official weather forecasts and local agricultural guidance.',
    tagline: 'Know the Rain. Plan the Crop. Protect the Harvest.',
  },

  ta: {
    // Brand
    brandTitle: 'ஹைப்பர்-மன்சூன்',
    brandSubtitle: 'ஒவ்வொரு கிராமத்திற்கும் சிற்றூர் அளவிலான பருவமழை கணிப்பு',
    heroDesc: 'வட்டாரம் மற்றும் கிராம அளவில் பருவமழை தொடக்கம் மற்றும் இடைவெளிகளை கணித்து விவசாயிகளுக்கு பயனுள்ள ஆலோசனைகளை வழங்குங்கள்.',
    predict: 'கணிப்பு',
    plan: 'திட்டமிடு',
    protect: 'பாதுகாப்பு',
    exploreDashboard: 'டாஷ்போர்டு பார்க்க',
    viewAdvisory: 'விவசாய ஆலோசனை',
    howItWorks: 'செயல்முறை',
    runDemo: 'கணிப்பு டெமோ இயக்கம்',

    // Navigation
    navHome: 'முகப்பு',
    navDashboard: 'விவசாயி டாஷ்போர்டு',
    navBreak: 'மழை இடைவெளி அபாயம்',
    navAdvisory: 'பயிர் ஆலோசனை',
    navAlerts: 'வானிலை எச்சரிக்கைகள்',
    navFeedback: 'மழை தகவல் பதிவு',
    navDataSources: 'தரவு மூலங்கள்',
    navMap: 'கிராம வரைபடம்',
    navOfficer: 'அதிகாரி டாஷ்போர்டு',
    navPerformance: 'மாதிரி துல்லியம்',
    navAbout: 'திட்டம் பற்றி',

    // Location Selector
    district: 'மாவட்டம்',
    block: 'வட்டாரம்',
    village: 'கிராமம்',
    selectedLocation: 'தேர்ந்தெடுக்கப்பட்ட கிராமம்',

    // Current Weather
    currentWeather: 'தற்போதைய கிராம வானிலை',
    temperature: 'வெப்பநிலை',
    rainfall: 'மழை அளவு (24 மணி)',
    humidity: 'காற்றின் ஈப்பப்பதம்',
    soilMoisture: 'மண் ஈரம்',
    windSpeed: 'காற்றின் வேகம்',

    // Monsoon Status
    monsoonStatus: 'பருவமழை நிலை',
    expectedOnset: 'எதிர்பார்க்கப்படும் தொடக்கம்',
    rainfallProbability: 'மழை வாய்ப்பு',
    confidence: 'கணிப்பு நம்பிக்கை',
    onset_expected: 'மழைத் தொடக்கம் எதிர்பார்க்கப்படுகிறது',
    active_monsoon: 'தீவிர பருவமழை',
    break_likely: 'மழை இடைவெளி வாய்ப்பு',
    break_ongoing: 'மழை இடைவெளி தொடர்கிறது',
    rainfall_returning: 'மழை மீண்டும் தொடங்குகிறது',
    not_started: 'பருவமழைக்கு முந்தைய நிலை',

    // Timeline
    timelineTitle: 'பருவமழை காலவரிசை',
    preMonsoon: 'முன்-பருவமழை',
    likelyOnset: 'சாத்தியமான தொடக்கம்',
    activeRainfall: 'தீவிர மழை',
    possibleBreak: 'மழை இடைவெளி',
    rainfallReturn: 'மழை மீளுதல்',

    // Chart Toggles
    chartTitle: '7 நாள் கிராம வானிலை முன்கணிப்பு',
    probToggle: 'மழை வாய்ப்பு (%)',
    rainToggle: 'எதிர்பார்க்கப்படும் மழை (மிமீ)',
    tempToggle: 'வெப்பநிலை (°C)',
    soilToggle: 'மண் ஈரம் (%)',

    // Monsoon Break Section
    breakTitle: 'பருவமழை இடைவெளி அபாயம்',
    breakRisk: 'இடைவெளி அபாய நிலை',
    expectedDryPeriod: 'எதிர்பார்க்கப்படும் உலர் காலம்',
    possibleStart: 'இடைவெளி தொடங்கும் நாள்',
    possibleReturn: 'மழை மீளும் நாள்',
    breakDesc: 'தற்போதைய வளிமண்டல குறிகாட்டிகள் நீண்ட உலர் காலத்தைக் காட்டுகின்றன. விவசாயிகள் மண் ஈரப்பதத்தைக் கண்காணித்து பாசனத் திட்டமிடல் செய்யவும்.',

    // Explainable AI
    whyPredicting: 'நாங்கள் ஏன் இதை கணிக்கிறோம்?',
    rainfallTrend: 'மழைப் போக்கு',
    cloudActivity: 'மேகம் & செயற்கைக்கோள்',
    historicalMatch: 'வரலாற்று முறைமை',

    // Advisory
    advisoryTitle: 'நான் என்ன செய்ய வேண்டும்?',
    selectCrop: 'உங்கள் பயிரைத் தேர்ந்தெடுக்கவும்',
    sowing: 'விதைப்பு & நிலம் தயார்',
    irrigation: 'பாசன மேலாண்மை',
    cropProtection: 'பயிர் பாதுகாப்பு',
    fertilizer: 'உர நிர்வாகம்',
    pest: 'பூச்சி & நோய்',
    harvest: 'அறுவடை & நீர் மேலாண்மை',

    // Feedback
    feedbackTitle: 'நீங்கள் கண்டதைப் பதிவு செய்யுங்கள்',
    didItRainToday: 'இன்று உங்கள் வயலில் மழை பெய்ததா?',
    soilCondition: 'மண் நிலை',
    submitFeedback: 'தகவல் அனுப்புக',
    feedbackSuccess: 'நன்றி! உங்கள் பதிவு உள்ளூர் கணிப்புகளை மேம்படுத்த உதவுகிறது.',
    pastObservations: 'சமீபத்திய சமூகப் பதிவுகள்',

    // Alerts
    weatherAlerts: 'வானிலை எச்சரிக்கை மையம்',
    markRead: 'படித்ததாகக் குறி',
    viewAdvisoryAction: 'பயிர் ஆலோசனை பார்க்க',

    // Disclaimers
    disclaimer: 'ஹைப்பர்-மன்சூன் என்பது ஒரு மாதிரி கணிப்பு அமைப்பாகும். உத்தியோகபூர்வ வானிலை அறிக்கைகளுடன் இதைப் பயன்படுத்தவும்.',
    tagline: 'மழையை அறிவோம். பயிரைத் திட்டமிடுவோம். விளைச்சலைக் காப்போம்.',
  },

  hi: {
    // Brand
    brandTitle: 'हाइपर-मानसून',
    brandSubtitle: 'हर गांव के लिए हाइपरलोकल मानसून इंटेलिजेंस',
    heroDesc: 'ब्लॉक और गांव स्तर पर मानसून के आगमन और ब्रेक का अनुमान लगाएं और मौसम की जानकारी को किसानों के लिए व्यावहारिक निर्णयों में बदलें।',
    predict: 'पूर्वानुमान',
    plan: 'योजना',
    protect: 'सुरक्षा',
    exploreDashboard: 'डैशबोर्ड देखें',
    viewAdvisory: 'किसान सलाह देखें',
    howItWorks: 'यह कैसे काम करता है',
    runDemo: 'डेमो पूर्वानुमान चलाएं',

    // Navigation
    navHome: 'होम',
    navDashboard: 'किसान डैशबोर्ड',
    navBreak: 'मानसून ब्रेक जोखिम',
    navAdvisory: 'फसल सलाह',
    navAlerts: 'मौसम अलर्ट',
    navFeedback: 'बारिश की रिपोर्ट दें',
    navDataSources: 'डेटा स्रोत',
    navMap: 'गांव का नक्शा',
    navOfficer: 'अधिकारी डैशबोर्ड',
    navPerformance: 'मॉडल प्रदर्शन',
    navAbout: 'परियोजना विवरण',

    // Location Selector
    district: 'जिला',
    block: 'ब्लॉक',
    village: 'गांव',
    selectedLocation: 'चयनित गांव',

    // Current Weather
    currentWeather: 'वर्तमान गांव का मौसम',
    temperature: 'तापमान',
    rainfall: 'वर्षा (24 घंटे)',
    humidity: 'आर्द्रता',
    soilMoisture: 'मिट्टी की नमी',
    windSpeed: 'हवा की गति',

    // Monsoon Status
    monsoonStatus: 'मानसून की स्थिति',
    expectedOnset: 'अपेक्षित आगमन',
    rainfallProbability: 'वर्षा की संभावना',
    confidence: 'मॉडल विश्वसनीयता',
    onset_expected: 'मानसून आगमन की संभावना',
    active_monsoon: 'सक्रिय मानसून',
    break_likely: 'मानसून ब्रेक की संभावना',
    break_ongoing: 'मानसून ब्रेक जारी',
    rainfall_returning: 'वर्षा की वापसी',
    not_started: 'पूर्व-मानसून चरण',

    // Timeline
    timelineTitle: 'मानसून समय-सीमा',
    preMonsoon: 'पूर्व-मानसून',
    likelyOnset: 'संभावित आगमन',
    activeRainfall: 'सक्रिय वर्षा',
    possibleBreak: 'संभावित ब्रेक',
    rainfallReturn: 'वर्षा की वापसी',

    // Chart Toggles
    chartTitle: '7-दिवसीय मौसम पूर्वानुमान',
    probToggle: 'वर्षा संभावना (%)',
    rainToggle: 'अनुमानित वर्षा (मिमी)',
    tempToggle: 'तापमान (°C)',
    soilToggle: 'मिट्टी की नमी (%)',

    // Monsoon Break Section
    breakTitle: 'मानसून ब्रेक जोखिम',
    breakRisk: 'ब्रेक जोखिम स्तर',
    expectedDryPeriod: 'अपेक्षित शुष्क अवधि',
    possibleStart: 'संभावित ब्रेक शुरुआत',
    possibleReturn: 'संभावित वर्षा वापसी',
    breakDesc: 'वर्तमान वायुमंडलीय संकेतक शुष्क अवधि का सुझाव देते हैं। किसान मिट्टी की नमी की निगरानी करें और सिंचाई की योजना बनाएं।',

    // Explainable AI
    whyPredicting: 'हम यह पूर्वानुमान क्यों लगा रहे हैं?',
    rainfallTrend: 'वर्षा का रुझान',
    cloudActivity: 'बादल और उपग्रह',
    historicalMatch: 'ऐतिहासिक पैटर्न',

    // Advisory
    advisoryTitle: 'मुझे क्या करना चाहिए?',
    selectCrop: 'अपनी फसल चुनें',
    sowing: 'बुआई और खेत की तैयारी',
    irrigation: 'सिंचाई प्रबंधन',
    cropProtection: 'फसल सुरक्षा',
    fertilizer: 'उर्वरक प्रबंधन',
    pest: 'कीट और रोग',
    harvest: 'कटाई और जल प्रबंधन',

    // Feedback
    feedbackTitle: 'मैदानी रिपोर्ट दें',
    didItRainToday: 'क्या आज आपके खेत में बारिश हुई?',
    soilCondition: 'मिट्टी की स्थिति',
    submitFeedback: 'रिपोर्ट जमा करें',
    feedbackSuccess: 'धन्यवाद! आपकी रिपोर्ट स्थानीय पूर्वानुमानों को बेहतर बनाने में मदद करती है।',
    pastObservations: 'हाल की सामुदायिक रिपोर्ट',

    // Alerts
    weatherAlerts: 'मौसम अलर्ट केंद्र',
    markRead: 'पढ़ा गया चिह्नित करें',
    viewAdvisoryAction: 'फसल सलाह देखें',

    // Disclaimers
    disclaimer: 'हाइपर-मानसून प्रदर्शन के लिए एक प्रोटोटाइप निर्णय-सहायता प्रणाली है। आधिकारिक मौसम पूर्वानुमानों के साथ इसका उपयोग करें।',
    tagline: 'बारिश को जानें। फसल की योजना बनाएं। उपज की रक्षा करें।',
  },
};
