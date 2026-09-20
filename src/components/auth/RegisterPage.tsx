import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { authService } from '../../services/auth';
import type { RegisterPayload } from '../../services/auth';
import { validateEmail, validateMobile, validatePassword } from '../../utils/validation';
import type { CropType, Language, UserRole } from '../../types';
import { DISTRICT_BLOCK_MAP } from '../../data/mockData';
import {
  Eye,
  EyeOff,
  UserPlus,
  Globe,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const { t, language, setLanguage, setActivePage, setCurrentUser, setLocation, setSelectedCrop } = useApp();

  const [formData, setFormData] = useState<RegisterPayload>({
    name: '',
    email: '',
    mobile: '',
    password: '',
    state: 'Tamil Nadu',
    district: 'Thanjavur',
    block: 'Orathanadu',
    village: 'Sample Village',
    preferredLanguage: language || 'en',
    preferredCrop: 'Paddy',
    role: 'farmer',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const districts = Object.keys(DISTRICT_BLOCK_MAP);
  const blocks = Object.keys(DISTRICT_BLOCK_MAP[formData.district] || {});
  const villages = DISTRICT_BLOCK_MAP[formData.district]?.[formData.block] || ['Sample Village'];

  const handleDistrictChange = (dist: string) => {
    const availableBlocks = Object.keys(DISTRICT_BLOCK_MAP[dist] || {});
    const firstBlock = availableBlocks[0] || '';
    const availableVillages = DISTRICT_BLOCK_MAP[dist]?.[firstBlock] || ['Sample Village'];

    setFormData((prev) => ({
      ...prev,
      district: dist,
      block: firstBlock,
      village: availableVillages[0] || 'Sample Village',
    }));
  };

  const handleBlockChange = (blk: string) => {
    const availableVillages = DISTRICT_BLOCK_MAP[formData.district]?.[blk] || ['Sample Village'];
    setFormData((prev) => ({
      ...prev,
      block: blk,
      village: availableVillages[0] || 'Sample Village',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) errors.name = t('errRequired');
    if (!formData.email.trim()) {
      errors.email = t('errRequired');
    } else if (!validateEmail(formData.email)) {
      errors.email = t('errInvalidEmail');
    }

    if (!formData.mobile.trim()) {
      errors.mobile = t('errRequired');
    } else if (!validateMobile(formData.mobile)) {
      errors.mobile = t('errInvalidMobile');
    }

    const pwdCheck = validatePassword(formData.password);
    if (!formData.password) {
      errors.password = t('errRequired');
    } else if (!pwdCheck.lengthOk) {
      errors.password = t('errPasswordShort');
    }

    if (!confirmPassword) {
      errors.confirmPassword = t('errRequired');
    } else if (confirmPassword !== formData.password) {
      errors.confirmPassword = t('errPasswordMatch');
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    try {
      const newUser = await authService.register(formData);
      setCurrentUser(newUser);

      // Sync user profile to context
      setLocation({
        district: newUser.district,
        block: newUser.block,
        village: newUser.village,
      });
      if (newUser.preferredLanguage) setLanguage(newUser.preferredLanguage);
      if (newUser.preferredCrop) setSelectedCrop(newUser.preferredCrop);

      setActivePage('dashboard');
    } catch (err: any) {
      if (err.message === 'AUTH_DUPLICATE_ACCOUNT') {
        setErrorMsg(t('errDuplicateAccount'));
      } else {
        setErrorMsg(err.message || 'Registration failed. Please check your details.');
      }
    } finally {
      setLoading(false);
    }
  };

  const crops: CropType[] = ['Paddy', 'Groundnut', 'Maize', 'Cotton', 'Millets', 'Pulses', 'Sugarcane', 'Vegetables'];

  return (
    <div className="max-w-2xl mx-auto my-6 p-6 sm:p-8 theme-bg-card border theme-border rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-3">
          <UserPlus className="w-6 h-6 text-slate-950 stroke-[2.5]" />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight theme-text-primary">
          {t('registerTitle')}
        </h1>
        <p className="text-xs theme-text-muted mt-1 max-w-md">
          {t('registerSubtitle')}
        </p>
      </div>

      {/* Language Switcher Banner */}
      <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 mb-6">
        <div className="flex items-center space-x-1 text-xs font-semibold theme-text-primary">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>Language:</span>
        </div>
        <div className="flex space-x-1">
          {(['en', 'ta', 'hi'] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                setLanguage(lang);
                setFormData((prev) => ({ ...prev, preferredLanguage: lang }));
              }}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                language === lang
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'theme-text-muted hover:theme-text-primary'
              }`}
            >
              {lang === 'en' ? 'English' : lang === 'ta' ? 'தமிழ்' : 'हिंदी'}
            </button>
          ))}
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('fullName')} *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Muniappan"
              className={`w-full px-3.5 py-2 rounded-xl text-sm theme-bg-input border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                fieldErrors.name ? 'border-red-500' : 'theme-border'
              }`}
            />
            {fieldErrors.name && <p className="text-[11px] text-red-400 mt-1">{fieldErrors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('email')} *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. farmer@domain.com"
              className={`w-full px-3.5 py-2 rounded-xl text-sm theme-bg-input border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                fieldErrors.email ? 'border-red-500' : 'theme-border'
              }`}
            />
            {fieldErrors.email && <p className="text-[11px] text-red-400 mt-1">{fieldErrors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('mobile')} (10 digits) *
            </label>
            <input
              type="text"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="9876543210"
              className={`w-full px-3.5 py-2 rounded-xl text-sm theme-bg-input border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                fieldErrors.mobile ? 'border-red-500' : 'theme-border'
              }`}
            />
            {fieldErrors.mobile && <p className="text-[11px] text-red-400 mt-1">{fieldErrors.mobile}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('userRole')} *
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
              className="w-full px-3.5 py-2 rounded-xl text-sm theme-bg-input border theme-border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="farmer">{t('roleFarmer')}</option>
              <option value="officer">{t('roleOfficer')}</option>
              <option value="fpo">{t('roleFPO')}</option>
              <option value="other">{t('roleOther')}</option>
            </select>
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('password')} *
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="At least 6 characters"
                className={`w-full px-3.5 py-2 pr-10 rounded-xl text-sm theme-bg-input border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  fieldErrors.password ? 'border-red-500' : 'theme-border'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 theme-text-muted hover:theme-text-primary p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {fieldErrors.password && <p className="text-[11px] text-red-400 mt-1">{fieldErrors.password}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('confirmPassword')} *
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              className={`w-full px-3.5 py-2 rounded-xl text-sm theme-bg-input border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                fieldErrors.confirmPassword ? 'border-red-500' : 'theme-border'
              }`}
            />
            {fieldErrors.confirmPassword && (
              <p className="text-[11px] text-red-400 mt-1">{fieldErrors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Location Selection */}
        <div className="pt-2 border-t theme-border-subtle">
          <p className="text-xs font-bold text-emerald-400 mb-2">
            📍 Farm Location (For Hyperlocal Weather Predictions):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-medium theme-text-muted mb-1">{t('district')}</label>
              <select
                value={formData.district}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg text-xs theme-bg-input border theme-border theme-text-primary"
              >
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium theme-text-muted mb-1">{t('block')}</label>
              <select
                value={formData.block}
                onChange={(e) => handleBlockChange(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg text-xs theme-bg-input border theme-border theme-text-primary"
              >
                {blocks.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium theme-text-muted mb-1">{t('village')}</label>
              <select
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg text-xs theme-bg-input border theme-border theme-text-primary"
              >
                {villages.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('preferredCrop')} *
            </label>
            <select
              value={formData.preferredCrop}
              onChange={(e) => setFormData({ ...formData, preferredCrop: e.target.value as CropType })}
              className="w-full px-3.5 py-2 rounded-xl text-sm theme-bg-input border theme-border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {crops.map((c) => (
                <option key={c} value={c}>
                  🌱 {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold theme-text-primary mb-1">
              {t('preferredLanguage')} *
            </label>
            <select
              value={formData.preferredLanguage}
              onChange={(e) => {
                const l = e.target.value as Language;
                setFormData({ ...formData, preferredLanguage: l });
                setLanguage(l);
              }}
              className="w-full px-3.5 py-2 rounded-xl text-sm theme-bg-input border theme-border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="en">English</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="hi">हिंदी (Hindi)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 mt-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>{t('registerBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-xs theme-text-muted">
        <span>{t('hasAccount')} </span>
        <button
          type="button"
          onClick={() => setActivePage('login')}
          className="text-emerald-400 hover:underline font-bold"
        >
          {t('loginLinkText')}
        </button>
      </div>
    </div>
  );
};
