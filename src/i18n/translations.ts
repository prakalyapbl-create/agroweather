import type { Language } from '../types';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Brand
    brandTitle: 'AgroWeather',
    brandSubtitle: 'Hyperlocal Monsoon Onset & Break Prediction System',
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
    navLogin: 'Login',
    navRegister: 'Register',
    navSettings: 'Settings & Profile',
    navLogout: 'Logout',

    // Location Selector
    state: 'State',
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
    disclaimer: 'AgroWeather is a production-grade decision-support system for farmers. Predictions are generated alongside official weather forecasts and local agricultural guidance.',
    tagline: 'Know the Rain. Plan the Crop. Protect the Harvest.',

    // Authentication UI
    loginTitle: 'Welcome Back',
    loginSubtitle: 'Local Weather Intelligence for Farmers & Agri Officers',
    emailOrMobile: 'Email Address or Mobile Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot Password?',
    loginBtn: 'Sign In to Account',
    registerBtn: 'Create New Account',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    registerLinkText: 'Create Account',
    loginLinkText: 'Sign In',
    registerTitle: 'Join AgroWeather Platform',
    registerSubtitle: 'Get personalized weather advisories for your village and crop',
    fullName: 'Full Name',
    preferredLanguage: 'Preferred Language',
    preferredCrop: 'Preferred Crop',
    userRole: 'User Role',
    roleFarmer: 'Farmer',
    roleOfficer: 'Agricultural Officer',
    roleFPO: 'FPO / Agri Business',
    roleOther: 'Other / Researcher',

    // Validation & Errors
    errRequired: 'This field is required',
    errInvalidEmail: 'Please enter a valid email address',
    errInvalidMobile: 'Please enter a valid 10-digit mobile number',
    errPasswordShort: 'Password must be at least 6 characters long',
    errPasswordMatch: 'Passwords do not match',
    errUserNotFound: 'Account not found with provided email/mobile',
    errInvalidPassword: 'Incorrect password. Try "password123" for demo',
    errDuplicateAccount: 'An account with this email or mobile already exists',

    // Theme & Profile
    selectTheme: 'Background & Interface Theme',
    themeAgri: '🌿 Agriculture Green',
    themeSky: '☁️ Sky Blue',
    themeMonsoon: '🌧️ Monsoon Teal',
    themeLight: '☀️ Clean Light',
    themeDark: '🌙 Charcoal Dark',
    themeAgriDesc: 'Deep green field theme for normal farming operations',
    themeSkyDesc: 'Clear sky blue theme for weather tracking',
    themeMonsoonDesc: 'Deep teal monsoon atmosphere for rain forecasts',
    themeLightDesc: 'Clean white contrast theme for bright outdoor reading',
    themeDarkDesc: 'High contrast dark theme for low light viewing',
    userProfileTitle: 'User Profile & Settings',
    accountDetails: 'Account Details',
    editProfile: 'Edit Profile',
    saveProfile: 'Save Profile Changes',
    profileSaved: 'Profile updated successfully!',
    guestNotice: 'You are currently browsing in Guest Mode.',
    loginToAccess: 'Sign in to sync your saved village, crop preferences, and advisories.',
  },

  ta: {
    // Brand
    brandTitle: 'அக்ரோ-வெதர்',
    brandSubtitle: 'ஒவ்வொரு கிராமத்திற்கும் சிற்றூர் அளவிலான வானிலை கணிப்பு',
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
    navLogin: 'உள்நுழைவு',
    navRegister: 'பதிவு செய்ய',
    navSettings: 'அமைப்புகள் & சுயவிவரம்',
    navLogout: 'வெளியேறு',

    // Location Selector
    state: 'மாநிலம்',
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

    // Authentication UI
    loginTitle: 'மீண்டும் வருக',
    loginSubtitle: 'விவசாயிகள் & அதிகாரிகளுக்கான உள்ளூர் வானிலை தகவல்',
    emailOrMobile: 'மின்னஞ்சல் அல்லது கைபேசி எண்',
    password: 'கடவுச்சொல்',
    confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்துக',
    rememberMe: 'என்னை நினைவில் கொள்',
    forgotPassword: 'கடவுச்சொல் மறந்துவிட்டதா?',
    loginBtn: 'கணக்கில் உள்நுழைக',
    registerBtn: 'புதிய கணக்கு தொடங்கு',
    noAccount: 'கணக்கு இல்லையா?',
    hasAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
    registerLinkText: 'கணக்கு உருவாக்க',
    loginLinkText: 'உள்நுழைவு',
    registerTitle: 'அக்ரோ-வெதர் தளத்தில் இணையுங்கள்',
    registerSubtitle: 'உங்கள் கிராமம் மற்றும் பயிருக்கு ஏற்ற வானிலை ஆலோசனைகளைப் பெறுங்கள்',
    fullName: 'முழு பெயர்',
    preferredLanguage: 'விருப்ப மொழி',
    preferredCrop: 'விருப்ப பயிர்',
    userRole: 'பயனர் பங்கு',
    roleFarmer: 'விவசாயி',
    roleOfficer: 'வேளாண்மை அதிகாரி',
    roleFPO: 'விவசாயி உற்பத்தியாளர் நிறுவனம்',
    roleOther: 'இதர / ஆய்வாளர்',

    // Validation & Errors
    errRequired: 'இப்புலம் கட்டாயமானது',
    errInvalidEmail: 'செல்லுபடியாகும் மின்னஞ்சலை உள்ளிடவும்',
    errInvalidMobile: '10 இலக்க கைபேசி எண்ணை உள்ளிடவும்',
    errPasswordShort: 'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்',
    errPasswordMatch: 'கடவுச்சொற்கள் பொருந்தவில்லை',
    errUserNotFound: 'இந்த மின்னஞ்சல்/கைபேசி எண்ணில் கணக்கு இல்லை',
    errInvalidPassword: 'தவறான கடவுச்சொல். மாதிரிக்கு "password123" பயன்படுத்தவும்',
    errDuplicateAccount: 'இந்த மின்னஞ்சல் அல்லது கைபேசியில் ஏற்கனவே கணக்கு உள்ளது',

    // Theme & Profile
    selectTheme: 'பின்னணி மற்றும் இடைமுக கருப்பொருள்',
    themeAgri: '🌿 வேளாண்மை பச்சை',
    themeSky: '☁️ வான நீலம்',
    themeMonsoon: '🌧️ பருவமழை டீல்',
    themeLight: '☀️ தூய ஒளி தீம்',
    themeDark: '🌙 அடர் கருமை தீம்',
    themeAgriDesc: 'சாதாரண விவசாய பணிகளுக்கான ஆழமான பச்சை தீம்',
    themeSkyDesc: 'வானிலை கண்காணிப்பிற்கான தெளிவான நீல தீம்',
    themeMonsoonDesc: 'மழை முன்கணிப்பிற்கான பருவமழை டீல் தீம்',
    themeLightDesc: 'வெளிச்சத்தில் படிக்க ஏற்ற தெளிவான வெள்ளை தீம்',
    themeDarkDesc: 'குறைந்த வெளிச்சத்தில் பார்க்க ஏற்ற இருண்ட தீம்',
    userProfileTitle: 'பயனர் சுயவிவரம் & அமைப்புகள்',
    accountDetails: 'கணக்கு விவரங்கள்',
    editProfile: 'சுயவிவரத்தை திருத்து',
    saveProfile: 'மாற்றங்களை சேமிக்க',
    profileSaved: 'சுயவிவரம் வெற்றிகரமாக புதுப்பிக்கப்பட்டது!',
    guestNotice: 'நீங்கள் விருந்தினர் முறையில் உள்ளீர்கள்.',
    loginToAccess: 'உங்கள் கிராமம் மற்றும் பயிர் அமைப்புகளைச் சேமிக்க உள்நுழையவும்.',
  },

  hi: {
    // Brand
    brandTitle: 'एग्रो-वेदर',
    brandSubtitle: 'हर गांव के लिए हाइपरलोकल मौसम इंटेलिजेंस',
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
    navLogin: 'लॉगिन',
    navRegister: 'पंजीकरण',
    navSettings: 'सेटिंग्स और प्रोफ़ाइल',
    navLogout: 'लॉगआउट',

    // Location Selector
    state: 'राज्य',
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

    // Authentication UI
    loginTitle: 'पुनः स्वागत है',
    loginSubtitle: 'किसानों और कृषि अधिकारियों के लिए स्थानीय मौसम जानकारी',
    emailOrMobile: 'ईमेल या मोबाइल नंबर',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    rememberMe: 'मुझे याद रखें',
    forgotPassword: 'पासवर्ड भूल गए?',
    loginBtn: 'खाते में साइन इन करें',
    registerBtn: 'नया खाता बनाएं',
    noAccount: 'क्या खाता नहीं है?',
    hasAccount: 'पहले से खाता है?',
    registerLinkText: 'खाता बनाएं',
    loginLinkText: 'साइन इन करें',
    registerTitle: 'एग्रोवेदर प्लेटफॉर्म से जुड़ें',
    registerSubtitle: 'अपने गांव और फसल के लिए व्यक्तिगत मौसम सलाह प्राप्त करें',
    fullName: 'पूरा नाम',
    preferredLanguage: 'पसंदीदा भाषा',
    preferredCrop: 'पसंदीदा फसल',
    userRole: 'उपयोगकर्ता भूमिका',
    roleFarmer: 'किसान',
    roleOfficer: 'कृषि अधिकारी',
    roleFPO: 'किसान उत्पादक संगठन (FPO)',
    roleOther: 'अन्य / शोधकर्ता',

    // Validation & Errors
    errRequired: 'यह विवरण आवश्यक है',
    errInvalidEmail: 'कृपया सही ईमेल पता दर्ज करें',
    errInvalidMobile: 'कृपया सही 10-अंकीय मोबाइल नंबर दर्ज करें',
    errPasswordShort: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए',
    errPasswordMatch: 'पासवर्ड मेल नहीं खाते',
    errUserNotFound: 'दिए गए ईमेल/मोबाइल से कोई खाता नहीं मिला',
    errInvalidPassword: 'गलत पासवर्ड। परीक्षण के लिए "password123" का प्रयोग करें',
    errDuplicateAccount: 'इस ईमेल या मोबाइल से पहले से खाता मौजूद है',

    // Theme & Profile
    selectTheme: 'बैकग्राउंड और इंटरफ़ेस थीम',
    themeAgri: '🌿 कृषि हरा',
    themeSky: '☁️ आसमान नीला',
    themeMonsoon: '🌧️ मानसून टील',
    themeLight: '☀️ स्वच्छ लाइट',
    themeDark: '🌙 चारकोल डार्क',
    themeAgriDesc: 'सामान्य कृषि कार्यों के लिए गहरा हरा थीम',
    themeSkyDesc: 'मौसम की निगरानी के लिए साफ नीला थीम',
    themeMonsoonDesc: 'वर्षा पूर्वानुमान के लिए मानसून टील थीम',
    themeLightDesc: 'उजाले में पढ़ने के लिए स्वच्छ सफेद थीम',
    themeDarkDesc: 'कम रोशनी में देखने के लिए डार्क थीम',
    userProfileTitle: 'उपयोगकर्ता प्रोफ़ाइल और सेटिंग्स',
    accountDetails: 'खाता विवरण',
    editProfile: 'प्रोफ़ाइल संपादित करें',
    saveProfile: 'बदलाव सहेजें',
    profileSaved: 'प्रोफ़ाइल सफलतापूर्वक अपडेट की गई!',
    guestNotice: 'आप वर्तमान में अतिथि मोड में ब्राउज़ कर रहे हैं।',
    loginToAccess: 'अपने गांव और फसल की प्राथमिकताओं को सहेजने के लिए साइन इन करें।',
  },
};
