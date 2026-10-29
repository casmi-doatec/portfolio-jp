// Hard-coded credentials (no DB). Email can be anything in a valid email format.
export const AUTH_PASSWORD = "dreamhigh";
export const AUTH_COOKIE = "portfolio_auth";
export const AUTH_TOKEN = "authenticated";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}
