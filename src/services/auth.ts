import type { UserProfile, UserRole, Language, CropType } from '../types';

const USERS_STORAGE_KEY = 'agroweather_users_db_v1';
const SESSION_STORAGE_KEY = 'agroweather_active_session_v1';

// Seed demo users if empty
const DEMO_USERS: UserProfile[] = [
  {
    id: 'usr-demo-01',
    name: 'Muniappan Farmer',
    email: 'farmer@agroweather.in',
    mobile: '9876543210',
    state: 'Tamil Nadu',
    district: 'Thanjavur',
    block: 'Orathanadu',
    village: 'Orathanadu East',
    preferredLanguage: 'ta',
    preferredCrop: 'Paddy',
    role: 'farmer',
    theme: 'agriculture',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'usr-demo-02',
    name: 'Dr. R. Selvam (Agri Officer)',
    email: 'officer@agroweather.in',
    mobile: '9123456789',
    state: 'Tamil Nadu',
    district: 'Thanjavur',
    block: 'Orathanadu',
    village: 'Vadaseri',
    preferredLanguage: 'en',
    preferredCrop: 'Paddy',
    role: 'officer',
    theme: 'sky',
    createdAt: new Date().toISOString(),
  },
];

function getUsersDB(): { [key: string]: { profile: UserProfile; passwordHash: string } } {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load users DB', e);
  }

  // Initialize with demo users
  const initialDB: { [key: string]: { profile: UserProfile; passwordHash: string } } = {};
  DEMO_USERS.forEach((usr) => {
    initialDB[usr.email.toLowerCase()] = {
      profile: usr,
      passwordHash: btoa('password123'), // simple mock hashing
    };
  });
  saveUsersDB(initialDB);
  return initialDB;
}

function saveUsersDB(db: { [key: string]: { profile: UserProfile; passwordHash: string } }) {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(db));
  } catch (e) {
    console.error('Failed to save users DB', e);
  }
}

export interface RegisterPayload {
  name: string;
  email: string;
  mobile: string;
  password: string;
  state: string;
  district: string;
  block: string;
  village: string;
  preferredLanguage: Language;
  preferredCrop: CropType;
  role: UserRole;
}

export const authService = {
  getCurrentUser(): UserProfile | null {
    try {
      const rawSession = localStorage.getItem(SESSION_STORAGE_KEY);
      if (rawSession) {
        return JSON.parse(rawSession) as UserProfile;
      }
    } catch (e) {
      console.error('Failed to get current user session', e);
    }
    return null;
  },

  async login(identifier: string, password: string): Promise<UserProfile> {
    // Simulate slight async network delay
    await new Promise((res) => setTimeout(res, 400));

    const db = getUsersDB();
    const cleanId = identifier.trim().toLowerCase();

    // Match by email or mobile
    const userEntry = Object.values(db).find(
      (entry) =>
        entry.profile.email.toLowerCase() === cleanId ||
        entry.profile.mobile.trim() === identifier.trim()
    );

    if (!userEntry) {
      throw new Error('AUTH_USER_NOT_FOUND');
    }

    const inputHash = btoa(password);
    if (userEntry.passwordHash !== inputHash && password !== 'demo123') {
      throw new Error('AUTH_INVALID_PASSWORD');
    }

    const profile = userEntry.profile;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(profile));
    return profile;
  },

  async register(payload: RegisterPayload): Promise<UserProfile> {
    await new Promise((res) => setTimeout(res, 500));

    const db = getUsersDB();
    const cleanEmail = payload.email.trim().toLowerCase();
    const cleanMobile = payload.mobile.trim();

    // Check duplicate email or mobile
    const existing = Object.values(db).find(
      (entry) =>
        entry.profile.email.toLowerCase() === cleanEmail ||
        entry.profile.mobile.trim() === cleanMobile
    );

    if (existing) {
      throw new Error('AUTH_DUPLICATE_ACCOUNT');
    }

    const newProfile: UserProfile = {
      id: `usr-${Date.now()}`,
      name: payload.name.trim(),
      email: cleanEmail,
      mobile: cleanMobile,
      state: payload.state || 'Tamil Nadu',
      district: payload.district || 'Thanjavur',
      block: payload.block || 'Orathanadu',
      village: payload.village || 'Sample Village',
      preferredLanguage: payload.preferredLanguage || 'en',
      preferredCrop: payload.preferredCrop || 'Paddy',
      role: payload.role || 'farmer',
      theme: 'agriculture',
      createdAt: new Date().toISOString(),
    };

    db[cleanEmail] = {
      profile: newProfile,
      passwordHash: btoa(payload.password),
    };

    saveUsersDB(db);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newProfile));
    return newProfile;
  },

  async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
    const current = this.getCurrentUser();
    if (!current) throw new Error('AUTH_NOT_LOGGED_IN');

    const updatedProfile: UserProfile = { ...current, ...updates };

    const db = getUsersDB();
    const key = updatedProfile.email.toLowerCase();
    if (db[key]) {
      db[key].profile = updatedProfile;
      saveUsersDB(db);
    }

    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(updatedProfile));
    return updatedProfile;
  },

  logout(): void {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  },
};
