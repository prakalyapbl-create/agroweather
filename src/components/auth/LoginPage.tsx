import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { authService } from '../../services/auth';
import { ThemeSelector } from '../theme/ThemeSelector';
import {
  CloudRain,
  Eye,
  EyeOff,
  Globe,
  ArrowRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { t, language, setLanguage, setActivePage, setCurrentUser, setLocation, setSelectedCrop, setTheme } = useApp();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ identifier?: string; password?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const errors: { identifier?: string; password?: string } = {};

    if (!identifier.trim()) {
      errors.identifier = t('errRequired');
    }
    if (!password) {
      errors.password = t('errRequired');
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    try {
      const user = await authService.login(identifier, password);
      setCurrentUser(user);

      // Sync user profile preferences to App context
      if (user.district && user.block && user.village) {
        setLocation({
          district: user.district,
          block: user.block,
          village: user.village,
        });
      }
      if (user.preferredLanguage) setLanguage(user.preferredLanguage);
      if (user.preferredCrop) setSelectedCrop(user.preferredCrop);
      if (user.theme) setTheme(user.theme);

      // Redirect to dashboard
      setActivePage('dashboard');
    } catch (err: any) {
      if (err.message === 'AUTH_USER_NOT_FOUND') {
        setErrorMsg(t('errUserNotFound'));
      } else if (err.message === 'AUTH_INVALID_PASSWORD') {
        setErrorMsg(t('errInvalidPassword'));
      } else {
        setErrorMsg(err.message || 'Login failed. Please check credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDemoFill = (type: 'farmer' | 'officer') => {
    if (type === 'farmer') {
      setIdentifier('farmer@agroweather.in');
      setPassword('password123');
    } else {
      setIdentifier('officer@agroweather.in');
      setPassword('password123');
    }
    setErrorMsg(null);
    setFieldErrors({});
  };

  return (
    <div className="max-w-md mx-auto my-6 p-6 sm:p-8 theme-bg-card border theme-border rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Visual Header Badge */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-3">
          <CloudRain className="w-8 h-8 text-slate-950 stroke-[2.5]" />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight theme-text-primary">
          {t('brandTitle')}
        </h1>
        <p className="text-xs theme-text-muted mt-1 max-w-xs">
          {t('loginSubtitle')}
        </p>
      </div>

      {/* Language & Quick Controls */}
      <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 mb-6">
        <div className="flex items-center space-x-1 text-xs font-semibold theme-text-primary">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>Language / மொழி / भाषा:</span>
        </div>
        <div className="flex space-x-1">
          {(['en', 'ta', 'hi'] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                language === lang
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'theme-text-muted hover:theme-text-primary'
              }`}
            >
              {lang === 'en' ? 'EN' : lang === 'ta' ? 'தமிழ்' : 'हिंदी'}
            </button>
          ))}
        </div>
      </div>

      {/* Demo Credentials Helper */}
      <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
        <div className="flex items-center text-amber-400 font-bold mb-1.5">
          <Sparkles className="w-3.5 h-3.5 mr-1" />
          <span>Quick Demo Login (One Click):</span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleDemoFill('farmer')}
            className="flex-1 py-1 px-2 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold border border-amber-500/30 text-[11px]"
          >
            Farmer Account
          </button>
          <button
            type="button"
            onClick={() => handleDemoFill('officer')}
            className="flex-1 py-1 px-2 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold border border-cyan-500/30 text-[11px]"
          >
            Officer Account
          </button>
        </div>
      </div>

      {/* Global Error Alert */}
      {errorMsg && (
        <div className="mb-6 p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold theme-text-primary mb-1">
            {t('emailOrMobile')} *
          </label>
          <div className="relative">
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="e.g. farmer@agroweather.in or 9876543210"
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm theme-bg-input border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                fieldErrors.identifier ? 'border-red-500' : 'theme-border'
              }`}
            />
          </div>
          {fieldErrors.identifier && (
            <p className="text-[11px] text-red-400 mt-1">{fieldErrors.identifier}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold theme-text-primary mb-1">
            {t('password')} *
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-3.5 py-2.5 pr-10 rounded-xl text-sm theme-bg-input border theme-text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
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
          {fieldErrors.password && (
            <p className="text-[11px] text-red-400 mt-1">{fieldErrors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center space-x-2 cursor-pointer theme-text-muted hover:theme-text-primary">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500"
            />
            <span>{t('rememberMe')}</span>
          </label>

          <button
            type="button"
            onClick={() => alert('Password reset link sent to demo email/mobile.')}
            className="text-emerald-400 hover:underline font-semibold"
          >
            {t('forgotPassword')}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>{t('loginBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Theme Selector inside Login */}
      <div className="mt-8 pt-6 border-t theme-border-subtle">
        <p className="text-xs font-bold theme-text-muted mb-3 text-center">
          {t('selectTheme')}
        </p>
        <ThemeSelector variant="buttons" />
      </div>

      {/* Switch to Register */}
      <div className="mt-6 text-center text-xs theme-text-muted">
        <span>{t('noAccount')} </span>
        <button
          type="button"
          onClick={() => setActivePage('register')}
          className="text-emerald-400 hover:underline font-bold"
        >
          {t('registerLinkText')}
        </button>
      </div>
    </div>
  );
};
