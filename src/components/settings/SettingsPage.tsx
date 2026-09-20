import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ThemeSelector } from '../theme/ThemeSelector';
import { DISTRICT_BLOCK_MAP } from '../../data/mockData';
import type { CropType, Language } from '../../types';
import { authService } from '../../services/auth';
import {
  User,
  MapPin,
  Globe,
  Palette,
  Sprout,
  Save,
  LogOut,
  CheckCircle
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const {
    t,
    language,
    setLanguage,
    theme,
    location,
    setLocation,
    selectedCrop,
    setSelectedCrop,
    currentUser,
    setCurrentUser,
    logoutUser,
    setActivePage
  } = useApp();

  const [editMode, setEditMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Local form state for profile edits
  const [district, setDistrictState] = useState(location.district);
  const [block, setBlockState] = useState(location.block);
  const [village, setVillageState] = useState(location.village);
  const [crop, setCropState] = useState<CropType>(selectedCrop);

  const districts = Object.keys(DISTRICT_BLOCK_MAP);
  const blocks = Object.keys(DISTRICT_BLOCK_MAP[district] || {});
  const villages = DISTRICT_BLOCK_MAP[district]?.[block] || ['Sample Village'];

  const handleDistrictChange = (d: string) => {
    setDistrictState(d);
    const blks = Object.keys(DISTRICT_BLOCK_MAP[d] || {});
    const b = blks[0] || '';
    setBlockState(b);
    const vils = DISTRICT_BLOCK_MAP[d]?.[b] || ['Sample Village'];
    setVillageState(vils[0] || 'Sample Village');
  };

  const handleBlockChange = (b: string) => {
    setBlockState(b);
    const vils = DISTRICT_BLOCK_MAP[district]?.[b] || ['Sample Village'];
    setVillageState(vils[0] || 'Sample Village');
  };

  const handleSaveProfile = async () => {
    // Save to App context
    setLocation({ district, block, village });
    setSelectedCrop(crop);

    if (currentUser) {
      const updated = await authService.updateProfile({
        name: currentUser.name,
        mobile: currentUser.mobile,
        district,
        block,
        village,
        preferredCrop: crop,
        preferredLanguage: language,
        theme,
      });
      setCurrentUser(updated);
    }

    setSaveSuccess(true);
    setEditMode(false);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const crops: CropType[] = ['Paddy', 'Groundnut', 'Maize', 'Cotton', 'Millets', 'Pulses', 'Sugarcane', 'Vegetables'];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="theme-bg-card border theme-border rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg">
            {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'F'}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold theme-text-primary">
                {currentUser ? currentUser.name : 'Guest Farmer'}
              </h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                {currentUser ? currentUser.role : 'Guest Mode'}
              </span>
            </div>
            <p className="text-xs theme-text-muted mt-0.5">
              {currentUser?.email || 'Login to save your personal preferences permanently'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          {currentUser ? (
            <button
              onClick={() => {
                logoutUser();
                setActivePage('home');
              }}
              className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>{t('navLogout')}</span>
            </button>
          ) : (
            <button
              onClick={() => setActivePage('login')}
              className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-extrabold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md"
            >
              <User className="w-4 h-4" />
              <span>{t('navLogin')} / {t('navRegister')}</span>
            </button>
          )}
        </div>
      </div>

      {saveSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{t('profileSaved')}</span>
        </div>
      )}

      {/* Theme Selector Section */}
      <div className="theme-bg-card border theme-border rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Palette className="w-5 h-5 text-emerald-400" />
          <h2 className="text-base font-extrabold theme-text-primary">
            {t('selectTheme')}
          </h2>
        </div>
        <p className="text-xs theme-text-muted mb-4">
          Choose a visual background theme tailored for farming, weather monitoring, or indoor/outdoor lighting conditions.
        </p>
        <ThemeSelector variant="cards" />
      </div>

      {/* Language Selector Section */}
      <div className="theme-bg-card border theme-border rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Globe className="w-5 h-5 text-emerald-400" />
          <h2 className="text-base font-extrabold theme-text-primary">
            Application Language / மொழி / भाषा
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { code: 'en', name: 'English', desc: 'Default English Interface' },
            { code: 'ta', name: 'தமிழ் (Tamil)', desc: 'தமிழ் விவசாய வழிகாட்டி' },
            { code: 'hi', name: 'हिंदी (Hindi)', desc: 'हिंदी मौसम और फसल सलाह' },
          ].map((item) => {
            const isSelected = language === item.code;
            return (
              <button
                key={item.code}
                onClick={() => {
                  setLanguage(item.code as Language);
                  if (currentUser) {
                    authService.updateProfile({ preferredLanguage: item.code as Language });
                  }
                }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-500/15 text-emerald-400 ring-2 ring-emerald-500/40'
                    : 'theme-border theme-bg-input theme-text-secondary hover:theme-text-primary'
                }`}
              >
                <div className="font-extrabold text-sm mb-1">{item.name}</div>
                <div className="text-[11px] theme-text-muted">{item.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Location & Crop Preferences Section */}
      <div className="theme-bg-card border theme-border rounded-2xl p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <h2 className="text-base font-extrabold theme-text-primary">
              Monitored Farm Location & Crop
            </h2>
          </div>
          <button
            onClick={() => setEditMode(!editMode)}
            className="text-xs font-bold text-emerald-400 hover:underline"
          >
            {editMode ? 'Cancel' : 'Edit Location & Crop'}
          </button>
        </div>

        {editMode ? (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold theme-text-primary mb-1">{t('district')}</label>
                <select
                  value={district}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs theme-bg-input border theme-border theme-text-primary"
                >
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold theme-text-primary mb-1">{t('block')}</label>
                <select
                  value={block}
                  onChange={(e) => handleBlockChange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs theme-bg-input border theme-border theme-text-primary"
                >
                  {blocks.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold theme-text-primary mb-1">{t('village')}</label>
                <select
                  value={village}
                  onChange={(e) => setVillageState(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs theme-bg-input border theme-border theme-text-primary"
                >
                  {villages.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold theme-text-primary mb-1">{t('preferredCrop')}</label>
              <select
                value={crop}
                onChange={(e) => setCropState(e.target.value as CropType)}
                className="w-full px-3.5 py-2 rounded-xl text-xs theme-bg-input border theme-border theme-text-primary"
              >
                {crops.map((c) => (
                  <option key={c} value={c}>
                    🌱 {c}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSaveProfile}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs flex items-center space-x-2 shadow-md hover:bg-emerald-400 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>{t('saveProfile')}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl theme-bg-input border theme-border">
            <div>
              <span className="text-[11px] theme-text-muted font-medium block">{t('district')}</span>
              <span className="text-sm font-extrabold theme-text-primary">{location.district}</span>
            </div>
            <div>
              <span className="text-[11px] theme-text-muted font-medium block">{t('block')}</span>
              <span className="text-sm font-extrabold theme-text-primary">{location.block}</span>
            </div>
            <div>
              <span className="text-[11px] theme-text-muted font-medium block">{t('village')}</span>
              <span className="text-sm font-extrabold theme-text-primary">{location.village}</span>
            </div>
            <div>
              <span className="text-[11px] theme-text-muted font-medium block">{t('preferredCrop')}</span>
              <span className="text-sm font-extrabold text-emerald-400 flex items-center space-x-1">
                <Sprout className="w-4 h-4" />
                <span>{selectedCrop}</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
