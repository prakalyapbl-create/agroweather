export interface ValidationErrors {
  [key: string]: string;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validateMobile(mobile: string): boolean {
  const clean = mobile.replace(/[\s-]/g, '');
  return /^[6-9]\d{9}$/.test(clean);
}

export function validatePassword(password: string): { isValid: boolean; lengthOk: boolean } {
  const lengthOk = password.length >= 6;
  return {
    isValid: lengthOk,
    lengthOk,
  };
}
