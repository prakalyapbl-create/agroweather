import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  Language,
  Theme,
  PageId,
  LocationInfo,
  CropType,
  WeatherAlert,
  FarmerFeedbackItem,
  PredictionOutput,
  CurrentWeather,
  UserProfile
} from '../types';
import { DISTRICT_BLOCK_MAP, INITIAL_ALERTS, INITIAL_FEEDBACK } from '../data/mockData';
import { calculatePrediction } from '../utils/predictionEngine';
import { TRANSLATIONS } from '../i18n/translations';
import { authService } from '../services/auth';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  location: LocationInfo;
  setLocation: (loc: LocationInfo) => void;
  selectedCrop: CropType;
  setSelectedCrop: (crop: CropType) => void;
  scenario: 'default' | 'early_onset' | 'prolonged_break' | 'active_monsoon' | 'drought_risk';
  setScenario: (scen: 'default' | 'early_onset' | 'prolonged_break' | 'active_monsoon' | 'drought_risk') => void;
  currentWeather: CurrentWeather;
  prediction: PredictionOutput;
  alerts: WeatherAlert[];
  markAlertAsRead: (id: string) => void;
  feedbackList: FarmerFeedbackItem[];
  addFeedback: (item: Omit<FarmerFeedbackItem, 'id' | 'date'>) => void;
  t: (key: string) => string;
  runDemoScenario: () => void;
  districts: string[];
  blocks: string[];
  villages: string[];
  currentUser: UserProfile | null;
  setCurrentUser: (user: UserProfile | null) => void;
  logoutUser: () => void;
  isAuthenticated: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'agroweather_theme_pref_v1';
const LANG_STORAGE_KEY = 'agroweather_lang_pref_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && ['agriculture', 'sky', 'monsoon', 'light', 'dark'].includes(saved)) {
        return saved as Theme;
      }
    } catch (e) {}
    return 'agriculture';
  });

  // Language state
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && ['en', 'ta', 'hi'].includes(saved)) {
        return saved as Language;
      }
    } catch (e) {}
    return 'en';
  });

  // Current User state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => authService.getCurrentUser());

  const [activePage, setActivePage] = useState<PageId>('home');

  const [location, setLocation] = useState<LocationInfo>(() => {
    if (currentUser?.district && currentUser?.block && currentUser?.village) {
      return {
        district: currentUser.district,
        block: currentUser.block,
        village: currentUser.village,
      };
    }
    return {
      district: 'Thanjavur',
      block: 'Orathanadu',
      village: 'Sample Village',
    };
  });

  const [selectedCrop, setSelectedCrop] = useState<CropType>(() => currentUser?.preferredCrop || 'Paddy');
  const [scenario, setScenario] = useState<'default' | 'early_onset' | 'prolonged_break' | 'active_monsoon' | 'drought_risk'>('default');

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    temperature: 31.4,
    rainfall: 18.5,
    humidity: 78,
    soilMoisture: 64,
    windSpeed: 14.2,
    cloudCover: 72,
  });

  const [prediction, setPrediction] = useState<PredictionOutput>(() =>
    calculatePrediction({
      recentRainfall24h: currentWeather.rainfall,
      temperature: currentWeather.temperature,
      humidity: currentWeather.humidity,
      soilMoisture: currentWeather.soilMoisture,
      cloudCover: currentWeather.cloudCover,
      windSpeed: currentWeather.windSpeed,
      historicalOnsetDiffDays: 2,
      scenarioPreset: scenario,
    })
  );

  const [alerts, setAlerts] = useState<WeatherAlert[]>(INITIAL_ALERTS);
  const [feedbackList, setFeedbackList] = useState<FarmerFeedbackItem[]>(INITIAL_FEEDBACK);

  // Set Theme function with HTML data-attribute reflection and persistence
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Set Language function with persistence
  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch (e) {}
  };

  useEffect(() => {
    // Apply theme data attribute on mount and theme change
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Sync state if currentUser changes
  useEffect(() => {
    if (currentUser) {
      if (currentUser.district && currentUser.block && currentUser.village) {
        setLocation({
          district: currentUser.district,
          block: currentUser.block,
          village: currentUser.village,
        });
      }
      if (currentUser.preferredLanguage) setLanguage(currentUser.preferredLanguage);
      if (currentUser.preferredCrop) setSelectedCrop(currentUser.preferredCrop);
      if (currentUser.theme) setTheme(currentUser.theme);
    }
  }, [currentUser]);

  useEffect(() => {
    let tempMod = 0;
    let rainMod = 0;
    if (location.village === 'Orathanadu East') { rainMod = 8; tempMod = -0.5; }
    if (location.village === 'Vadaseri') { rainMod = -10; tempMod = 1.2; }
    if (location.village === 'Kannanthankudi') { rainMod = -14; tempMod = 1.5; }

    const updatedWeather: CurrentWeather = {
      temperature: 31.4 + tempMod,
      rainfall: Math.max(0, 18.5 + rainMod),
      humidity: Math.min(95, 78 + rainMod * 0.5),
      soilMoisture: Math.min(90, Math.max(20, 64 + rainMod)),
      windSpeed: 14.2,
      cloudCover: Math.min(98, Math.max(20, 72 + rainMod)),
    };

    setCurrentWeather(updatedWeather);

    const newPred = calculatePrediction({
      recentRainfall24h: updatedWeather.rainfall,
      temperature: updatedWeather.temperature,
      humidity: updatedWeather.humidity,
      soilMoisture: updatedWeather.soilMoisture,
      cloudCover: updatedWeather.cloudCover,
      windSpeed: updatedWeather.windSpeed,
      historicalOnsetDiffDays: 2,
      scenarioPreset: scenario,
    });

    setPrediction(newPred);
  }, [location, scenario]);

  const markAlertAsRead = (id: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, read: true } : a))
    );
  };

  const addFeedback = (item: Omit<FarmerFeedbackItem, 'id' | 'date'>) => {
    const newItem: FarmerFeedbackItem = {
      ...item,
      id: `fb-${Date.now()}`,
      date: 'Today',
    };
    setFeedbackList((prev) => [newItem, ...prev]);
  };

  const logoutUser = () => {
    authService.logout();
    setCurrentUser(null);
  };

  const runDemoScenario = () => {
    const scenarios: ('default' | 'early_onset' | 'prolonged_break' | 'active_monsoon' | 'drought_risk')[] = [
      'early_onset',
      'prolonged_break',
      'active_monsoon',
      'drought_risk',
      'default',
    ];
    const currentIndex = scenarios.indexOf(scenario);
    const nextScenario = scenarios[(currentIndex + 1) % scenarios.length];
    setScenario(nextScenario);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  const districts = Object.keys(DISTRICT_BLOCK_MAP);
  const blocks = Object.keys(DISTRICT_BLOCK_MAP[location.district] || {});
  const villages = DISTRICT_BLOCK_MAP[location.district]?.[location.block] || [];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        activePage,
        setActivePage,
        location,
        setLocation,
        selectedCrop,
        setSelectedCrop,
        scenario,
        setScenario,
        currentWeather,
        prediction,
        alerts,
        markAlertAsRead,
        feedbackList,
        addFeedback,
        t,
        runDemoScenario,
        districts,
        blocks,
        villages,
        currentUser,
        setCurrentUser,
        logoutUser,
        isAuthenticated: Boolean(currentUser),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
